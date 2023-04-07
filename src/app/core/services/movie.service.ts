import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Genre, Movie, MoviesResponse} from '@core/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '98df78b64e2ffa02ca344247d3361cf4';
  private readonly apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMovies(page: number = 1): Observable<MoviesResponse> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`;
    return this.http.get<MoviesResponse>(url);
  }

  getMovie(id: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  searchMovies(query: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
  
    return this.http.get<any>(url).pipe(
      map(response => response.results as Movie[])
    );
  }
  


}
