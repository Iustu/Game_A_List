import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { biblioteca } from '../../biblioteca.model';
import { bibliotecaService } from '../../biblioteca.service';
import { jogoService } from 'src/app/modules/jogo/jogo.service';

@Component({
  selector: 'app-biblioteca-detail',
  templateUrl: './biblioteca-detail.component.html',
})
export class bibliotecaDetailComponent implements OnInit {
  constructor(
    private bibliotecaService: bibliotecaService,
    private jogoService: jogoService,
    private loading: NgxSpinnerService,
    private toast: ToastrService){}

  private fb: FormBuilder = inject(FormBuilder);


  public form = this.fb.group({
    plataforma: new FormControl({value: '', disabled: true}, [Validators.maxLength(100),Validators.required]) ,
    estado: ['', [ Validators.required ]],
    feedback: new FormControl({value: '', disabled: false}, [Validators.maxLength(100)]),
    horasJogadas: new FormControl({value: 0, disabled: false}, []),
    nota: new FormControl({value: 0, disabled: false}, [Validators.max(10), Validators.min(0)]),
  })

  public formJogo = this.fb.group({
    titulo: new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
    imagem: new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
    publicadora: new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
    estudio:new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
  })


  biblioteca!: biblioteca;


  ngOnInit(): void {
    
    this.biblioteca = history.state.data as biblioteca;

    this.buscarJogo(this.biblioteca.idJogo!);

    this.form.patchValue({
      ...this.biblioteca
    });
  }

  buscarJogo(id:number){
    this.jogoService.findById(id).subscribe({
      next: (res)=>{
        this.formJogo.patchValue({
          ...res
        });
        this.loading.hide();
      },
      error:(e)=>{
        this.toast.error("Ocorreu um erro ao encontrar os dados do jogo na biblioteca");
        console.log(e);
        this.loading.hide();
      }
    })
  }

  updateClient() {
    let formJson= this.form.getRawValue()
    let req : biblioteca={
      id: this.biblioteca.id,
      idJogo: this.biblioteca.idJogo,
      idUsuario: this.biblioteca.idUsuario,
      titulo: this.biblioteca.titulo,
      dataAdicao: this.biblioteca.dataAdicao,
       ...formJson,
        
    }
    this.loading.show()
    this.bibliotecaService.update(req).subscribe({
      next:()=>{
        this.loading.hide();
        this.toast.success("jogo da biblioteca atualizado com sucesso!")
      },
      error:()=>{
        this.loading.hide();
        this.toast.error("Ocorreu um erro ao alterar o jogo da biblioteca")
      }
    })
  }
}
