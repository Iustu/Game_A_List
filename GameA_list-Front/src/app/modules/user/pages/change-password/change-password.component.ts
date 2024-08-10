import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  private fb: FormBuilder = inject(FormBuilder);

  public form = this.fb.group({
    email: ['', [ Validators.required],],
  });
}
