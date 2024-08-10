import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoggedComponent } from 'src/app/shared/layout/logged/layout-logged.component';

import { UserUpdateComponent } from './pages/user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLoggedComponent,
    //canActivate: [AuthGuard],
    children: [
      {path : 'alterar', component: UserUpdateComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
