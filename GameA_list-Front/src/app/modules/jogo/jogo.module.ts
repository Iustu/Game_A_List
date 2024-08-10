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

import { jogoRoutingModule } from './jogo-routing.module';
import { AddjogoComponent } from './pages/add/add-jogo.component';
import { ListjogosComponent } from './pages/list/list-jogos.component';
import { jogoFormComponent } from './ui/jogo-form/jogo-form.component';
import { ItemListComponent } from './ui/item-list/item-list.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';
import { jogoDetailComponent } from './pages/jogo-detail/jogo-detail.component';

@NgModule({
  declarations: [
    ListjogosComponent,
    ItemListComponent,
    AddjogoComponent,
    SearchBarComponent,
    jogoFormComponent,
    jogoDetailComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        jogoRoutingModule,
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
    exports: [jogoFormComponent]
})
export class jogoModule { }
