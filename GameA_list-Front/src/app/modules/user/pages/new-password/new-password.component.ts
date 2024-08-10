import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/auth/auth.service';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
})
export class NewPasswordComponent {
  private authService: AuthService = inject(AuthService);
  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  private fb: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

  public form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(60), this.passwordMatchValidator(), ]],
    passConfirm: ['', [Validators.required, this.passwordMatchValidator(),]],
  });

  public passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;

      // Use uma expressão regular para verificar se a senha atende aos critérios
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

      if (!passwordPattern.test(password)) {
        // Se a senha não atender aos critérios, retorne um erro de validação
        return { invalidPassword: true };
      }

      // Caso contrário, a senha é válida
      return null;
    };
  }

  public login(){
    let formObj = this.form.getRawValue();
    let password: string = formObj.password + '';
    this.spinner.show();

    setTimeout(() => {
      this.authService.changePassword({password: password}).subscribe(
        (res) => {
          this.authService.loggout();
          this.spinner.hide();
          this.router.navigate(['/jogos']);
        },
        (error) => { // Use o nome 'error' para o manipulador de erro
          console.log('erro:', error);
          this.spinner.hide();
        }
      );
    }, 500);

  }

  public invalid(controlName: string, errorName: string) {
    return this.form.get(controlName)?.hasError(errorName);
  }

}
