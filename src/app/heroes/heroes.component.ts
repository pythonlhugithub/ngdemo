import { Component, OnInit } from '@angular/core';
import {Hero}from '../Hero'
//import { heroes } from '../mock/mockHero';
import { HeroService } from '../hero.service';
import { heroes } from '../mock/mockHero';

import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
id:1,
name:'david'

  }

 

  heroes: Hero[]=[];

  constructor(private hs: HeroService, private messageService: MessageService) { 

  }

  ngOnInit(): void {
     this.getHeroes();

  
  };


  


  updateid(id:any):void{
    console.log(id);

   // var hero1=this.heroes.find(a=>a.id); //this is good

   // console.log(hero1);

  }

  selectedHero?:Hero;

 onSelect(hero : Hero){
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
 }


 getHeroes(): void {
  this.hs.getHeroes()
      .subscribe(heroes => this.heroes = heroes);  // ---worked
 }
//  getHeroes(): void {
//   this.heroes = this.hs.getHeroes();
// }


// getHeroes():void{
//   this.hs.getHeroes().subscribe(resp=>this.heroes=heroes)  //heroes is from data service is subscribe, so subscribe method in data seevic
// }


 }