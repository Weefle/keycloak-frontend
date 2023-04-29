import { Component, OnInit } from '@angular/core';
import { Movie } from '@core/models/movie';
import {MovieService} from "@core/services/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieFavorite().subscribe(value => this.movies = value);
  }

  onDelete() {
    this.movieService.getMovieFavorite().subscribe(value => this.movies = value);
  }



}
