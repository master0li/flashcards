import { Component, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  currentCard = new Card(); 
  currentIndex = 0;

  cards = [

    new Card('A','A'),
    new Card('F','F'),
    new Card('H','H'),
    new Card('I','I'),
    new Card('M','M'),
    new Card('N','N'),
    new Card('P','P'),

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
    new Card('You','You'),    
    new Card('On','On')
  ]

  constructor() { }

  ngOnInit() {

    this.currentIndex = -1;
    this.nextCard();
    
  }

  public nextCard()
  {
    if (this.currentIndex < 0)
    {
      this.shuffleInPlace<Card>(this.cards);
      this.currentIndex = this.cards.length - 1;
    }


    this.currentCard = { ...this.cards[this.currentIndex] };
    this.currentCard.Question = this.setCase(this.currentCard.Question);

    this.currentIndex--;

  }

  public shuffleInPlace<T>(array: T[]): T[] {
    // if it's 1 or 0 items, just return
    if (array.length <= 1) return array;
  
    // For each index in array
    for (let i = 0; i < array.length; i++) {
  
      // choose a random not-yet-placed item to place there
      // must be an item AFTER the current item, because the stuff
      // before has all already been placed
      const randomChoiceIndex = this.randomIntFromInterval(i, array.length - 1);
  
      // place our random choice in the spot by swapping
      [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }
  
    return array;
  }

  setCase(word: string)
  {
    let rand = this.randomIntFromInterval(0,2);

    if (rand == 0) {
      word = word.toUpperCase();
    }
    else if (rand == 1) {
      word = word.toLowerCase();
    }

    return word;
  }

  randomIntFromInterval(min,max) // min and max included
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

}
