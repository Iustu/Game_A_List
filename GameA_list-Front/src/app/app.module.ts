import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, isDevMode, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ValidationMessagesModule } from '@house-of-angular/validation-messages';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { ChangePasswordComponent } from './modules/user/pages/change-password/change-password.component';
import { LogInComponent } from './modules/user/pages/log-in/log-in.component';
import { NewPasswordComponent } from './modules/user/pages/new-password/new-password.component';
import { SignUpComponent } from './modules/user/pages/sign-up/sign-up.component';
import { ValidationMessagesConfigService } from './shared/services/validation-messages-config.service';


const maskConfig: Partial<IConfig> = {
  dropSpecialCharacters: false,
  validation: true,
  thousandSeparator: '.',
  decimalMarker: ","
};

const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ChangePasswordComponent,
    HeaderComponent,
    NotFoundComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgOptimizedImage,
    ValidationMessagesModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatMenuModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    provideEnvironmentNgxMask(maskConfig),
    provideNgxMask(maskConfig),
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {provide: MAT_RADIO_DEFAULT_OPTIONS,useValue: { color: 'primary' },},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor( private validationMsgConfig: ValidationMessagesConfigService )
  { }

}
