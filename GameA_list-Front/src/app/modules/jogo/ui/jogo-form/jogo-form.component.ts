
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-jogo-form',
  templateUrl: './jogo-form.component.html',
})
export class jogoFormComponent implements OnInit  {
  private rootFormGroup: FormGroupDirective = inject(FormGroupDirective);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.rootFormGroup.form as FormGroup;
  }

}