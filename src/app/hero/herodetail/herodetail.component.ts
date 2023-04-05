import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '@core/models/heroe';
import { HeroeService } from '@core/services/heroe.service';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.scss']
})
export class HerodetailComponent implements OnInit {

  hero: Heroe = {} as Heroe;

  constructor(
    private heroeService: HeroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const name: string = this.activatedRoute.snapshot.params['name'];
    this.heroeService.getHeroe(name).subscribe(
      {
        next: (data) => this.hero = data,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }

}
