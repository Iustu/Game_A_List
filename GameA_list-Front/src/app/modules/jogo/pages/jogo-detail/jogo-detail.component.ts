import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { jogo } from '../../jogo.model';
import { jogoService } from '../../jogo.service';

@Component({
  selector: 'app-jogo-detail',
  templateUrl: './jogo-detail.component.html',
})
export class jogoDetailComponent implements OnInit {
  constructor(
    private varRoute : ActivatedRoute,
    private jogoService: jogoService,
    private loading: NgxSpinnerService,
    private toast: ToastrService,
    private router: Router){}

  private fb: FormBuilder = inject(FormBuilder);


  public form = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(100)] ],
    address: ['', [ Validators.maxLength(250) ]],
    cellphone: ['', [ Validators.required]],
    email: ['', [Validators.email, Validators.maxLength(100)]],
    birthdayString: ['', [ ]] ,
    gender: ['', [ Validators.required ]],
    description: ['', [ Validators.maxLength(2500)]]
  })


  jogo!: jogo;
  private routeId : any;

  ngOnInit(): void {
    this.varRoute.paramMap.subscribe(paramMap => {
      this.routeId=paramMap.get('id');
    })

    this.buscarCliente(this.routeId);
  }

  buscarCliente(id:string) {
    this.jogoService.findById(id).subscribe({
      next: (res)=>{
        let birthday = this.jogoService.getDateAsString(res.birthday!);
        this.form.patchValue({
          birthdayString: birthday,
          ...res
        });
        this.jogo=res;
        this.loading.hide();
      },
      error:(e)=>{
        this.toast.error("Ocorreu um erro ao encontrar os dados do jogo");
        console.log(e);
        this.loading.hide();
      }
    })
  }

  updateClient() {

    const birthdayString = this.form.controls['birthdayString'].value!
    const birthdayDate = new Date(this.jogoService.getDateAsISO(birthdayString));
    let formJson= this.form.getRawValue()
    let req : jogo={
      uid:this.routeId,
      createdAt:this.jogo.createdAt,
      birthday:birthdayDate,
      ...formJson
    }
    this.loading.show()
    this.jogoService.update(this.routeId, req).subscribe({
      next:()=>{
        this.loading.hide();
        this.toast.success("Cliente atualizado com sucesso!")
      },
      error:()=>{
        this.loading.hide();
        this.toast.error("Ocorreu um erro ao alterar o cliente")
      }
    })
  }
}
