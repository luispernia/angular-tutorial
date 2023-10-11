import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {
  heroes: Hero[] = [];
  loading?: boolean;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.loading = true;
    setTimeout(() => {
      this.heroService.getHeroes().subscribe(heroes => {
        this.heroes = heroes
        this.loading = false;
      });
    }, 1000);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
