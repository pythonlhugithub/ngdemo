import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import {  heroes } from './mock/mockHero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
 

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {

   }

  getHeroes():Observable<Hero[]>
  {
    const heros =of(heroes); //---mock data

    this.messageService.add('HeroService: fetched heroes');

    
    return heros;
  };
}
