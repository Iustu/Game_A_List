import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuSignal } from 'src/app/shared/signal/menu.signal';
import { ToastrService } from 'ngx-toastr';

import { jogo } from '../../jogo.model';
import { jogoService } from '../../jogo.service';

@Component({
  selector: 'app-list-jogos',
  templateUrl: './list-jogos.component.html',
  styleUrls: ['./list-jogos.component.scss']
})
export class ListjogosComponent implements OnInit {

  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  private menuSignal: MenuSignal = inject(MenuSignal);
  private jogoService = inject(jogoService);
  private toast = inject(ToastrService);

  jogos$ = signal(<jogo[]> []) ;
  searchText$ = signal('');

   error=true;

  constructor(){
    this.menuSignal.setMenu({title:'Feed', backRoute: null});
  }

  ngOnInit() {
    this.spinner.show();
    this.jogoService.findAll().subscribe({
      next:(jogos)=>{
        this.spinner.hide();
        this.jogos$.set(jogos);
        this.error=false;
      },
      error:(e:any)=>{
        this.spinner.hide();
        this.toast.error("Ocorreu um erro ao buscar os clientes");
        this.error=true;
      }
    })
  }

  visiblejogos$ = computed( () => {

    const searchText = this.searchText$().toLowerCase();

    return this.jogos$().filter( (c) => {
      const names = c.name!.toLowerCase().split(' ');
      return names.find( name => name.startsWith(searchText) );
    });
  });

  search($event: string) {
    this.searchText$.set($event);
  }

}

