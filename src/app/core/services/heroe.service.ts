import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '@core/models/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  fooURL = environment.heroe_api;

 httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'f3c529b0c4msh16d0759eef9d379p14c09ejsnbdf2ec0a9b7e',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
    })
  };

  constructor(private httpClient: HttpClient) { console.log("HeroeService"); }

  public getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(this.fooURL + 'heroes', this.httpOptions);
  }

  public getHeroe(name: string): Observable<Heroe> {
    return this.httpClient.get<Heroe>(this.fooURL + '?hero=' + name, this.httpOptions);
  }
}
