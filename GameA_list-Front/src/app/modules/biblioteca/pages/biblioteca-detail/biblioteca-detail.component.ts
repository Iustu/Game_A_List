import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { biblioteca } from '../../biblioteca.model';
import { bibliotecaService } from '../../biblioteca.service';

@Component({
  selector: 'app-biblioteca-detail',
  templateUrl: './biblioteca-detail.component.html',
})
export class bibliotecaDetailComponent implements OnInit {
  constructor(
    private varRoute : ActivatedRoute,
    private bibliotecaService: bibliotecaService,
    private loading: NgxSpinnerService,
    private toast: ToastrService,
    private router: Router){}

  private fb: FormBuilder = inject(FormBuilder);


  public form = this.fb.group({
    idUsuario: [0, [ Validators.maxLength(250) ]],
    idJogo: [0, [ Validators.required]],
    titulo: ['', [Validators.email, Validators.maxLength(100)]],
    plataforma: ['', [ ]] ,
    estado: ['', [ Validators.required ]],
    feedback: ['', [ Validators.maxLength(2500)]],
    horasJogadas: [0, [ Validators.maxLength(2500)]],
    nota: [0, [ Validators.maxLength(2500)]],

    
  })


  biblioteca!: biblioteca;
  private routeId : any;

  ngOnInit(): void {
    this.varRoute.paramMap.subscribe(paramMap => {
      this.routeId=paramMap.get('id');
    })

    this.buscarCliente(this.routeId);
  }

  buscarCliente(id:string) {
    this.bibliotecaService.findById(id).subscribe({
      next: (res)=>{
        this.form.patchValue({
          ...res
        });
        this.biblioteca=res;
        this.loading.hide();
      },
      error:(e)=>{
        this.toast.error("Ocorreu um erro ao encontrar os dados da biblioteca");
        console.log(e);
        this.loading.hide();
      }
    })
  }

  updateClient() {

    let formJson= this.form.getRawValue()
    let req : biblioteca={
      id:this.biblioteca.id, ...formJson, dataAdicao: this.biblioteca.dataAdicao
    }
    this.loading.show()
    this.bibliotecaService.update(req).subscribe({
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
