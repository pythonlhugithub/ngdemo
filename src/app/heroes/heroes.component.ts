import { Component, OnInit } from '@angular/core';
import {Hero}from '../Hero'
import { heroes } from '../mock/mockHero';
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

  heroes: Hero[]=heroes;

  constructor() { }

  ngOnInit(): void {
  }


  updateid(id:any):void{
    console.log(id);

    var hero1=this.heroes.find(a=>a.id); //this is good

    console.log(hero1);

  }

  selectedHero?:Hero;

 onSelect(hero : Hero){
  this.selectedHero = hero;

 }
}
