import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { jogo } from '../../jogo.model';
import { jogoService } from '../../jogo.service';

@Component({
  selector: 'app-add-jogo',
  templateUrl: './add-jogo.component.html',
  styleUrls: ['./add-jogo.component.scss']
})
export class AddjogoComponent implements OnInit {

  private jogoService: jogoService = inject(jogoService);
  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  private toastr: ToastrService = inject(ToastrService);
  private fb: FormBuilder = inject(FormBuilder);
  private router: Router= inject(Router);


  public form = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(100)] ],
    address: ['', [ Validators.maxLength(250) ]],
    cellphone: ['', [ Validators.required]],
    email: ['', [Validators.email, Validators.maxLength(100)]],
    birthdayString: ['', [ ]] ,
    gender: ['', [ Validators.required ]],
    description: ['', [ Validators.maxLength(2500)]]
  })

  ngOnInit(): void {

  }

  updateClient() {
    const birthdayString = this.form.controls['birthdayString'].value!
    const birthdayDate = new Date(this.jogoService.getDateAsISO(birthdayString));

    let formObj = this.form.getRawValue();
    let client : jogo = {uid:null, createdAt:new Date(),birthday:birthdayDate, ...formObj}

    this.spinner.show();
    this.jogoService.create(client).subscribe({
      next: (r)=>{
        this.spinner.hide();
        this.router.navigate(['./jogos'])
        this.toastr.success('Cliente Cadastrado com sucesso!');
      },
      error:(e)=>{
        this.spinner.hide();
        this.toastr.error('Ocorreu um erro ao cadastrar o cliente.');
      }
    });

  }
}
