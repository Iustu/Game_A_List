
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-biblioteca-form',
  templateUrl: './biblioteca-form.component.html',
})
export class bibliotecaFormComponent implements OnInit  {
  private rootFormGroup: FormGroupDirective = inject(FormGroupDirective);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.rootFormGroup.form as FormGroup;
  }

}