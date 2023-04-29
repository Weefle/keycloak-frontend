import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MoviesResponse } from '@core/models/movie';
import { KeycloakService } from '@core/services/keycloak.service';
import { MovieService } from '@core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string = "";
  searchQuery = "";
  movies: Movie[] = [];
  currentPage: number = 1;
  totalResults: number = 0;
  totalPages: number = 0;
  loading: boolean = false;

  /**
   * Inject services.
   *
   * Important: `LoginService` depends on `KeycloakService`.
   *
   * @param keycloakService is the service that takes care of setting up OAuth with Keycloack.
   * @param loginService is the service that handles the basic information of the authentication system.
   */
  constructor(private keycloakService: KeycloakService, private router: Router, private movieService: MovieService) { }


  ngOnInit(): void {
    this.getMovies(this.currentPage);
    //this.getHeroes()
    this.keycloakService.afterTryLogin().subscribe(() => this.username = this.keycloakService.getUsername()); // After KeycloakService configure()
    this.username = this.keycloakService.getUsername(); // Before KeycloakService configure()
    console.log("HomeComponent ngOnInit");
  }

  searchMovies() {
    if (this.searchQuery) {
      this.loading = true;
    this.movieService.searchMovies(this.searchQuery).subscribe(
      (response: MoviesResponse) => {
        this.movies = response.results;
        this.totalResults = response.total_results;
        this.totalPages = response.total_pages;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
    }
  }


  getMovies(page: number): void {
    this.loading = true;
    this.movieService.getMovies(page).subscribe(
      (response: MoviesResponse) => {
        this.movies = response.results;
        this.totalResults = response.total_results;
        this.totalPages = response.total_pages;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getMovies(page);
  }
}
