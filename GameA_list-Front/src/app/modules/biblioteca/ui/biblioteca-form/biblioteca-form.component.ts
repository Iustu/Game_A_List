
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

  onSelectionChanged({value}:any) {
    if (value === 'NAO_JOGADO') {
      this.form.get('horasJogadas')!.disable()
      this.form.get('horasJogadas')!.setValue(0);

      this.form.get('nota')!.disable()
      this.form.get('nota')!.setValue(0);

      this.form.get('feedback')!.disable()
      this.form.get('feedback')!.setValue('');
    } else {
      this.form.get('horasJogadas')!.enable();
      this.form.get('nota')!.enable();
      this.form.get('feedback')!.enable();
    }
  }

}