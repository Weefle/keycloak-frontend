import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '@core/models/heroe';
import { HeroeService } from '@core/services/heroe.service';
import { KeycloakService } from '@core/services/keycloak.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string = "";
  heroes: Heroe[]= [];
  searchString = "";

  /**
   * Inject services.
   * 
   * Important: `LoginService` depends on `KeycloakService`.
   * 
   * @param keycloakService is the service that takes care of setting up OAuth with Keycloack.
   * @param loginService is the service that handles the basic information of the authentication system.
   */
  constructor(private keycloakService: KeycloakService, private heroeService: HeroeService, private router: Router) { }

  getHeroes(hero?: string) {
    if(hero != null && hero?.length>0){
      this.heroeService.getHeroe(hero).subscribe(data => {
        this.router.navigate(['/home/detail', hero]);
      });
    }else{
      this.heroeService.getHeroes().subscribe(data => {
        this.heroes = data;
      });
    }

  }

  ngOnInit(): void {
    this.getHeroes()
    this.keycloakService.afterTryLogin().subscribe(() => this.username = this.keycloakService.getUsername()); // After KeycloakService configure()
    this.username = this.keycloakService.getUsername(); // Before KeycloakService configure()
    console.log("HomeComponent ngOnInit");
  }
}
