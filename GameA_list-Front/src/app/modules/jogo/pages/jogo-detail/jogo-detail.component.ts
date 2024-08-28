import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { jogo } from '../../jogo.model';

@Component({
  selector: 'app-jogo-detail',
  templateUrl: './jogo-detail.component.html',
})
export class jogoDetailComponent implements OnInit {

  private fb: FormBuilder = inject(FormBuilder);

  jogo!: jogo;


  public form = this.fb.group({
    titulo: new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
    imagem: new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
    publicadora: new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
    estudio:new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
  })

  
  ngOnInit(): void {
    this.jogo = history.state.data as jogo
    this.form.patchValue({
      ...this.jogo
    });
  }

  
}
