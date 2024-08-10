import { effect, Injectable, signal } from '@angular/core';

export interface Menu {
  title: string | null;
  backRoute: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class MenuSignal {

  menu$ = signal(<Menu>{})

  menuEffect = effect(() => {
  })

  setMenu(data: Menu): void {
    this.menu$.set(data)
  }

}
