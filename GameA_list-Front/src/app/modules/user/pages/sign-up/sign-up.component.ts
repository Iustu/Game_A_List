import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AbstractComponent } from 'src/app/shared/components/abstract.component';

import { User } from '../../user.model';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',

})
export class SignUpComponent extends AbstractComponent implements OnInit {
  private authService: AuthService = inject(AuthService);
  private userService = inject(UserService);
  private router: Router = inject(Router);

  showMessageError: boolean = false;

  public signUpForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100),this.nomeValidator() ]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
    apelido: ['', [Validators.required]],
    senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60) ]],
  });

  ngOnInit(): void {
    this.uid = this.activatedRoute.snapshot.paramMap.get('uid');
  }


   public nomeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nome = control.value;

      if (!nome || nome.trim().split(' ').length < 2) {
        return { nomeInvalid: true };
      }
      return null;
    };
  }

  

  public save(){
    let formObj = this.signUpForm.getRawValue();
    const user: User = {
      idUsuario: null,
      apelido: formObj.apelido || '',
      email:formObj.email ||'',
      nome: formObj.nome ||'',
      senha: formObj.senha ||'',
      ativo: true
    }

    this.spinner.show();
    this.userService.create(user).pipe(
      catchError((error) => {
        this.spinner.hide();
        console.log(error);
        this.showMessageError = true;
        throw Error(error);
      })
    ).subscribe(() => {
      this.spinner.hide();
      setTimeout(() => {
        this.authService.login({apelido: user.email, senha: user.senha }).subscribe(
          (res) => {
            console.log('login com sucesso!');
            this.spinner.hide();
            this.router.navigate(['/jogos']);
          },
          (error) => { // Use o nome 'error' para o manipulador de erro
            console.log('login com erro:', error);
            this.spinner.hide();
          }
        );
      }, 500);
    });
  }

  public invalid(controlName: string, errorName: string) {
    return this.signUpForm.get(controlName)?.hasError(errorName);
  }
}
