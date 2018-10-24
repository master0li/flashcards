import { Component, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  currentCard = new Card(); 
  cards = [

    new Card('A','A'),
    new Card('F','F'),
    new Card('H','H'),
    new Card('I','I'),
    new Card('M','M'),
    new Card('N','N'),

    new Card('And','And'),
    new Card('Are','Are'),
    new Card('Do','Do'),
    new Card('Is','Is'),
    new Card('Made','Made'),
    new Card('Me','Me'),
    new Card('My','My'),
    new Card('See','See'),
    new Card('The','The'),
    new Card('There','There'),
    new Card('To','To'),
    new Card('You','You')
  ]

  constructor() { }

  ngOnInit() {
    this.currentCard = this.cards[this.randomIntFromInterval(0,this.cards.length - 1)];
    this.currentCard.Question = this.setCase(this.currentCard.Question);
  }

  public nextCard()
  {
    this.currentCard = this.cards[this.randomIntFromInterval(0,this.cards.length - 1)];
    this.currentCard.Question = this.setCase(this.currentCard.Question);

  }

  setCase(word: string)
  {
    let rand = this.randomIntFromInterval(0,2);

    if (rand == 1) {
      word = word.toUpperCase();
    }
    else{
      word = word.toLowerCase();
    }

    return word;
  }

  randomIntFromInterval(min,max) // min and max included
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

}
