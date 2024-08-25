import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Login } from 'src/app/shared/auth/login.model';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent {
  private authService: AuthService = inject(AuthService);
  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  private fb: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  public  toastr: ToastrService = inject(ToastrService);
  public  isLogin = true;
  public  isInvalid = false;

  public form = this.fb.group({
    apelido: ['', []],
    senha: ['', []],
  });

  public formForgotPassword = this.fb.group({
    email: ['', [ Validators.required, Validators.email]]
  });


  public login(){
    let formObj = this.form.getRawValue();
    const auth: Login = {
      ...formObj
    }

    this.spinner.show();

    setTimeout(() => {
      this.authService.login(formObj).subscribe(
        (res) => {
          console.log('login com sucesso!');
          this.spinner.hide();
          this.router.navigate(['/biblioteca']);
        },
        (error) => { // Use o nome 'error' para o manipulador de erro
          console.log('login com erro:', error);
          this.isInvalid = true;
          this.spinner.hide();
        }
      );
    }, 500);

  }

  forgotPassword(){
    this.spinner.show();
    let formObj = this.formForgotPassword.getRawValue();

    const email = formObj.email;

    setTimeout(() => {
      this.authService.passwordRecovery({email: email}).subscribe(
        (res) => {
          this.spinner.hide();
          this.toastr.success('Foi enviado uma senha temporária para o e-mail informado caso ele esteja vinculado a uma conta ativa.','E-mail de recuperação enviado!')
          this.isLogin=true
        },
        (error) => {
          this.spinner.hide();
        }
      );
    }, 500);
  }

}
