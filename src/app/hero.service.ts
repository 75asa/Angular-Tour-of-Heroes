import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MessageService } from './message.service';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes() {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
