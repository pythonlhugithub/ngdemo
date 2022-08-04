import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import {  heroes } from './mock/mockHero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,  private http: HttpClient) {

   }

  getHeroes():Observable<Hero[]>
  {
    const heros =of(heroes); //---mock data

    this.messageService.add('HeroService: fetched heroes');

    return this.http.get<Hero[]>(this.heroesUrl)
    //return heros;
  };


  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = heroes.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private heroesUrl = 'api/heroes'; 


}
