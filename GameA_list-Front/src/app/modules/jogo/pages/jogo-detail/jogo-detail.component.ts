import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocationStrategy } from '@angular/common';

import { jogo } from '../../jogo.model';

@Component({
  selector: 'app-jogo-detail',
  templateUrl: './jogo-detail.component.html',
})
export class jogoDetailComponent implements OnInit {

  //state: any
  //constructor(private location: LocationStrategy) {}

  private fb: FormBuilder = inject(FormBuilder);


  public form = this.fb.group({
    titulo: ['', [ Validators.maxLength(250) ]],
    imagem: ['', []],
    publicadora: ['', [Validators.maxLength(100)]],
    estudio: ['', [ ]] ,
  })


  ngOnInit(): void {
    const jogo : jogo = history.state.data as jogo
    this.form.patchValue({
      ...jogo
    });
  }

  
}
