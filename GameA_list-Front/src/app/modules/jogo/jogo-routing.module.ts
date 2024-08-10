import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoggedComponent } from 'src/app/shared/layout/logged/layout-logged.component';

import { AddjogoComponent } from './pages/add/add-jogo.component';
import { ListjogosComponent } from './pages/list/list-jogos.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutLoggedComponent,
    //canActivate: [AuthGuard],
    children: [
      {path: '', component:  ListjogosComponent},
      {path : 'add', component: AddjogoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class jogoRoutingModule { }
