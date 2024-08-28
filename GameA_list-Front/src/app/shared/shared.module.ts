import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { LayoutBlankComponent } from './layout/blank/layout-blank.component';
import { LayoutLoggedComponent } from './layout/logged/layout-logged.component';

@NgModule({
  declarations: [
    LayoutBlankComponent,
    LayoutLoggedComponent,
    MenuMobileComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatMenuModule,
    RouterModule
  ],
  exports:[]
})
export class SharedModule { }
