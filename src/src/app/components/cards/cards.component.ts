import { Component, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  currentCard = new Card(); 
  currentIndex = 0;
  showQuestion: boolean = true;
  title: string = "Nolan's Sight Words";

  cards = [

    // new Card('A','A'),
    // new Card('B','B'),
    // new Card('D','D'),
    // new Card('F','F'),
    // new Card('H','H'),
    // new Card('I','I'),
    // new Card('M','M'),
    // new Card('N','N'),
    // new Card('P','P'),
    // new Card('S','S'),
    // new Card('T','T'),
    // new Card('U','U'),
    // new Card('V','V'),
    // new Card('Z','Z'),

    // new Card('And','And'),
    // new Card('Are','Are'),  
    // new Card('Big','Big'), 
    // new Card('Can','Can'),
    // new Card('Do','Do'),
    // new Card('Down','Down'),
    // new Card('Find','Find'),   
    // new Card('For','For'),    
    // new Card('Go','Go'),
    // new Card('Have','Have'),
    // new Card('I','I'),
    // new Card('In','In'),
    // new Card('Is','Is'),
    // new Card('It','It'),
    // new Card('Like','Like'),  
    // new Card('Little','Little'),  
    // new Card('Look','Look'),  
    // new Card('Made','Made'),
    // new Card('Me','Me'),
    // new Card('My','My'), 
    // new Card('No','No'), 
    // new Card('Not','Not'), 
    // new Card('On','On'),
    // new Card('Play','Play'),
    // new Card('See','See'),
    // new Card('The','The'),
    // new Card('They','They'),
    // new Card('There','There'),
    // new Card('To','To'),
    // new Card('Up','Up'),
    // new Card('We','We'),        
    // new Card('What','What'), 
    // new Card('When','When'),
    // new Card('Yes','Yes'),
    // new Card('You','You')
    
    // new Card('Come','Come'),
    // new Card('Of','Of'),
    // new Card('With','With'),
    // new Card('Here','Here'),
    // new Card('One','One'),
    // new Card('Two','Two'),
    // new Card('Three','Three'),
    // new Card('Said','Said'),
    // new Card('Funny','Funny'),
    // new Card('That','That'),
    // new Card('This','This'),
    // new Card('Run','Run'),
    // new Card('Jump','Jump'),
    // new Card('Help','Help'),
    // new Card('Make','Make'),
    // new Card('Where','Where'),
    // new Card('Away','Away'),
    // new Card('Red','Red'),
    // new Card('Blue','Blue'),
    // new Card('Yellow','Yellow'),

    new Card('Tomato','Tomato'),
    new Card('Mayo','Mayo'),
    new Card('Crunchy','Crunchy'),
    new Card('Wonders','Wonders'),
    new Card('Enough','Enough'),
    new Card('Everyone','Everyone'),
    new Card('Something','Something'),
    new Card('Huge','Huge'),
    new Card('Scoops','Scoops'),
  ]

  constructor() { }

  ngOnInit() {

    this.shuffleInPlace<Card>(this.cards);
    this.currentIndex = -1;
    this.nextCard();
    
  }

  public previousCard()
  {
    this.showQuestion = true;

    
    this.currentIndex--;

    if (this.currentIndex < 0)
    {
      this.shuffleInPlace<Card>(this.cards);
      this.currentIndex = this.cards.length - 1;
    }


    this.currentCard = { ...this.cards[this.currentIndex] };
    this.currentCard.Question = this.setCase(this.currentCard.Question);


  }

  public nextCard()
  {
    this.showQuestion = true;
    
    this.currentIndex++;

    if (this.currentIndex == this.cards.length)
    {
      this.shuffleInPlace<Card>(this.cards);
      this.currentIndex = 0;
    }


    this.currentCard = { ...this.cards[this.currentIndex] };
    this.currentCard.Question = this.setCase(this.currentCard.Question);


  }

  public shuffle()
  {
      this.shuffleInPlace<Card>(this.cards);
      this.currentIndex = 0;

      this.currentCard = { ...this.cards[this.currentIndex] };
      this.currentCard.Question = this.setCase(this.currentCard.Question);
  }

  public toggleAnswerQuestion()
  {
    this.showQuestion = !this.showQuestion;
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
