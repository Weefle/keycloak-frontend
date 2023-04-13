import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Genre, Movie, MoviesResponse} from '@core/models/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.api_key;
  private readonly apiUrl = environment.tmdb_api;
  movieUrl = environment.movie_api;
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private http: HttpClient) {}

  getMovies(page: number = 1): Observable<MoviesResponse> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`;
    return this.http.get<MoviesResponse>(url);
  }

  getMovie(id: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  searchMovies(query: string): Observable<MoviesResponse> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<MoviesResponse>(url);
    /*return this.http.get<any>(url).pipe(
      map(response => response.results as Movie[])
    );*/
  }

  public createMovie(movie: Movie): Observable<any> {
    return this.http.post<any>(this.movieUrl + 'create', movie, this.httpOptions);
  }

  public getMovieList(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.movieUrl + 'list', this.httpOptions);
  }

}
