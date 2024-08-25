import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ChangePasswordComponent } from './modules/user/pages/change-password/change-password.component';
import { LogInComponent } from './modules/user/pages/log-in/log-in.component';
import { NewPasswordComponent } from './modules/user/pages/new-password/new-password.component';
import { SignUpComponent } from './modules/user/pages/sign-up/sign-up.component';
import { authGuard } from './shared/auth/auth.guard';

const routes: Routes = [

    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'signup/:uid', component:  SignUpComponent},
    {path: 'notFound', component:  NotFoundComponent},
    {path:'login', component:LogInComponent},
    {path:'new-password', component:NewPasswordComponent},
    {path:'password', component: ChangePasswordComponent},

    {path: 'user', canActivate: [authGuard], loadChildren: () => import('./modules/user/user.module')
    .then(m => m.UserModule) },

    {path: 'jogos', canActivate: [authGuard], loadChildren: () => import('./modules/jogo/jogo.module')
        .then(m => m.jogoModule) },
    
    {path: 'biblioteca', canActivate: [authGuard], loadChildren: () => import('./modules/biblioteca/biblioteca.module')
            .then(m => m.bibliotecaModule) },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
