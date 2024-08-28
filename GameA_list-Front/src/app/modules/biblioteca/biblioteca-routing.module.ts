import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoggedComponent } from 'src/app/shared/layout/logged/layout-logged.component';

import { AddbibliotecaComponent } from './pages/add/add-biblioteca.component';
import { ListbibliotecasComponent } from './pages/list/list-bibliotecas.component';
import { bibliotecaDetailComponent } from './pages/biblioteca-detail/biblioteca-detail.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutLoggedComponent,
    children: [
      {path: '', component:  ListbibliotecasComponent},
      {path : 'add', component: AddbibliotecaComponent},
      {path:'detail', component: bibliotecaDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class bibliotecaRoutingModule { }
