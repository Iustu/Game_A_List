import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, computed, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuSignal } from 'src/app/shared/signal/menu.signal';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-layout-logged',
  templateUrl: './layout-logged.component.html',
  styleUrls:['./layout-logged.component.scss']
})
export class LayoutLoggedComponent {
  private nenuSignal: MenuSignal = inject(MenuSignal);
  private authService: AuthService = inject(AuthService);

  menu$ = computed(() => this.nenuSignal.menu$() );

  public mobile: boolean = true;
  public width: number = window.screen.width;

  ngOnInit() {
    if (this.width > 640) {
      this.mobile = false;
    }
  }

  loggout(){
    this.authService.loggout();
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}

