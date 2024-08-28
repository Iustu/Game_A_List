import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoggedComponent } from 'src/app/shared/layout/logged/layout-logged.component';

import { AddjogoComponent } from './pages/add/add-jogo.component';
import { ListjogosComponent } from './pages/list/list-jogos.component';
import { jogoDetailComponent } from './pages/jogo-detail/jogo-detail.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutLoggedComponent,
    //canActivate: [AuthGuard],
    children: [
      {path: '', component:  ListjogosComponent},
      {path : 'add', component: AddjogoComponent},
      {path: 'detail', component: jogoDetailComponent},
      {path: 'biblioteca', loadChildren: () => import('../biblioteca/biblioteca.module')
        .then(m => m.bibliotecaModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class jogoRoutingModule { }
