import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http:HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='
    +parametros.pais +'&category='
    +parametros.categoria +'&apiKey=f51c6b2a6b494cd586020bbf3d447976';
    return this.http.get(URL);
  }
}
