import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { biblioteca } from '../../biblioteca.model';
import { bibliotecaService } from '../../biblioteca.service';

@Component({
  selector: 'app-add-biblioteca',
  templateUrl: './add-biblioteca.component.html',
  styleUrls: ['./add-biblioteca.component.scss']
})
export class AddbibliotecaComponent implements OnInit {

  private bibliotecaService: bibliotecaService = inject(bibliotecaService);
  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  private toastr: ToastrService = inject(ToastrService);
  private fb: FormBuilder = inject(FormBuilder);
  private router: Router= inject(Router);


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

  ngOnInit(): void {
    

  }

  updateClient() {

    let formObj = this.form.getRawValue();
    let client : biblioteca = {id:null,dataAdicao:null, ...formObj}

    this.spinner.show();
    this.bibliotecaService.create(client).subscribe({
      next: (r)=>{
        this.spinner.hide();
        this.router.navigate(['./bibliotecas'])
        this.toastr.success('Cliente Cadastrado com sucesso!');
      },
      error:(e)=>{
        this.spinner.hide();
        this.toastr.error('Ocorreu um erro ao cadastrar o cliente.');
      }
    });

  }
}
