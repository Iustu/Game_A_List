import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';

import { environment } from '../../../environments/environment';
import { jogo } from './jogo.model';

@Injectable({
  providedIn: 'root'
})
export class jogoService {

  constructor(private http: HttpClient) { }

  searchBar: WritableSignal<string>  = signal("");

  findAll() {
    return this.http.get<jogo[]>(environment.apiUrl + '/jogo');
  }

  create(jogo:jogo){
    return this.http.post<jogo>(environment.apiUrl + '/jogo/new', jogo);
  }

  findById(id: number) {
    return this.http.get<jogo>(environment.apiUrl + '/jogo' + '/' + id);
  }

  update(id: string, jogo:jogo) {
    return this.http.put<jogo>(environment.apiUrl + '/jogo' + '/' + id, jogo);
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
