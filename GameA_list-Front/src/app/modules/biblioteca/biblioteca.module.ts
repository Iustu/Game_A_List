import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ValidationMessagesModule } from '@house-of-angular/validation-messages';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { bibliotecaRoutingModule } from './biblioteca-routing.module';
import { AddbibliotecaComponent } from './pages/add/add-biblioteca.component';
import { ListbibliotecasComponent } from './pages/list/list-bibliotecas.component';
import { bibliotecaFormComponent } from './ui/biblioteca-form/biblioteca-form.component';
import { ItemListComponent } from './ui/item-list/item-list.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';
import { bibliotecaDetailComponent } from './pages/biblioteca-detail/biblioteca-detail.component';

@NgModule({
  declarations: [
    ListbibliotecasComponent,
    ItemListComponent,
    AddbibliotecaComponent,
    SearchBarComponent,
    bibliotecaFormComponent,
    bibliotecaDetailComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        bibliotecaRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
        PlatformModule,
        MatInputModule,
        ValidationMessagesModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatTabsModule,
        NgOptimizedImage,
        SharedModule,
        NgxMaskDirective,
        NgxMaskPipe,
    ],
    exports: [bibliotecaFormComponent]
})
export class bibliotecaModule { }
