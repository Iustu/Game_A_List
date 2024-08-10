import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ValidationMessagesModule } from '@house-of-angular/validation-messages';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserUpdateComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    PlatformModule,
    MatInputModule,
    ValidationMessagesModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSelectModule,
    SharedModule
  ]
})
export class UserModule { }
