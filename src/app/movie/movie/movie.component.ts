import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "@core/models/movie";
import {Router} from "@angular/router";
import {MovieService} from "@core/services/movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router, private movieService: MovieService) { }

  @Input()
  movie?: Movie;

  @Input()
  isFavoriteList?: boolean;

  @Output()
  movieDeleted = new EventEmitter();

  ngOnInit(): void {

  }

  addMovieToFavorites(movie: Movie) {
    this.movieService.createMovie(movie).subscribe(
      {
        next: (data) => {
          console.log(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }

  removeMovieFromFavorites(id: number) {
    this.movieService.removeMovie(id).subscribe(
      {
        next: (data) => {
          this.movieService.getMovie(id).subscribe({
            next: (data) => {
              this.movieDeleted.emit();
              console.log(data);
            },
            error: (e) => console.error(e),
            complete: () => console.info('emitted')
          });
          console.log(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }

  goToDetail(movie: Movie) {
    this.router.navigate(['/home/movies', movie.id]);
  }

}
