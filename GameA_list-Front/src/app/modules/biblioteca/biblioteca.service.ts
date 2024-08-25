import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';

import { environment } from '../../../environments/environment';
import { biblioteca } from './biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class bibliotecaService {

  constructor(private http: HttpClient) { }

  searchBar: WritableSignal<string>  = signal("");

  findAll(id: string) {
    return this.http.get<biblioteca[]>(environment.apiUrl + '/ownedGames'+ '/' + id);
  }

  create(biblioteca:biblioteca){
    return this.http.post<biblioteca>(environment.apiUrl + '/ownedGames/new', biblioteca);
  }

  findById(id: string) {
    return this.http.get<biblioteca>(environment.apiUrl + '/bibliotecas' + '/' + id);
  }

  update(biblioteca:biblioteca) {
    return this.http.post<biblioteca>(environment.apiUrl + '/ownedGames/update', biblioteca);
  }

  getDateAsString(data:Date) {

    const date = new Date(data);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayFixed = day.toString().length === 1 ? '0' + day : day;
    const monthFixed = month.toString().length === 1 ? '0' + month : month;

    return dayFixed.toString() +'/'+ monthFixed.toString() +'/'+ year.toString();
  }

  getDateAsISO(dataForm:string) {
   
    if(dataForm=='') return '';

    const splitDate = dataForm.split('/');;

    const date = new Date(splitDate[2] + '/' +  splitDate[1] + '/' +  splitDate[0])

    return date;
  }

}
