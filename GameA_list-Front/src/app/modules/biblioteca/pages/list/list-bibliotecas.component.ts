import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuSignal } from 'src/app/shared/signal/menu.signal';
import { ToastrService } from 'ngx-toastr';

import { biblioteca } from '../../biblioteca.model';
import { bibliotecaService } from '../../biblioteca.service';

@Component({
  selector: 'app-list-bibliotecas',
  templateUrl: './list-bibliotecas.component.html',
  styleUrls: ['./list-bibliotecas.component.scss']
})
export class ListbibliotecasComponent implements OnInit {

  private spinner: NgxSpinnerService = inject(NgxSpinnerService);
  private menuSignal: MenuSignal = inject(MenuSignal);
  private bibliotecaService = inject(bibliotecaService);
  private toast = inject(ToastrService);

  bibliotecas$ = signal(<biblioteca[]> []) ;
  searchText$ = signal('');

   error=true;

  constructor(){
    this.menuSignal.setMenu({title:'Feed', backRoute: null});
  }

  ngOnInit() {
     const id = localStorage.getItem('userId')!

    this.spinner.show();
    this.bibliotecaService.findAll(id).subscribe({
      next:(bibliotecas)=>{
        this.spinner.hide();
        this.bibliotecas$.set(bibliotecas);
        this.error=false;
      },
      error:(e:any)=>{
        this.spinner.hide();
        this.toast.error("Ocorreu um erro ao buscar os jogos da biblioteca");
        this.error=true;
      }
    })
  }

  visiblebibliotecas$ = computed( () => {

    const searchText = this.searchText$().toLowerCase();

    return this.bibliotecas$().filter( (c) => {
      const names = c.titulo!.toLowerCase().split(' ');
      return names.find( name => name.startsWith(searchText) );
    });
  });

  search($event: string) {
    this.searchText$.set($event);
  }

}

