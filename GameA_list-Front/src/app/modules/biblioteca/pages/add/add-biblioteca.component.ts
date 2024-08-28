import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { biblioteca } from '../../biblioteca.model';
import { bibliotecaService } from '../../biblioteca.service';
import { jogo } from 'src/app/modules/jogo/jogo.model';

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
    plataforma: new FormControl({value: '', disabled: false}, [Validators.maxLength(100), Validators.required]) ,
    estado: ['', [ Validators.required ]],
    feedback: new FormControl({value: '', disabled: false}, [Validators.maxLength(100)]),
    horasJogadas: new FormControl({value: 0, disabled: false}, []),
    nota: new FormControl({value: 0, disabled: false}, [Validators.max(10), Validators.min(0)]),
  })

  jogo!: jogo;

  ngOnInit(): void {
    this.jogo = history.state.data as jogo

  }

  updateClient() {

    const idUsuario : number = Number(localStorage.getItem('userId'))
    let formObj = this.form.getRawValue();

    let client : biblioteca = {
      id:null,idJogo: this.jogo.id,
      idUsuario:idUsuario,
      titulo: this.jogo.titulo,
      dataAdicao:null,
       ...formObj}

    this.spinner.show();
    this.bibliotecaService.create(client).subscribe({
      next: (r)=>{
        this.spinner.hide();
        this.router.navigate(['./biblioteca'])
        this.toastr.success('Jogo Cadastrado na biblioteca com sucesso!');
      },
      error:(e)=>{
        this.spinner.hide();
        this.toastr.error(e);
      }
    });

  }
}
