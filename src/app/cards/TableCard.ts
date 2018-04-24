import { Card} from './Card';
import {Speaker} from "../models/speaker";
export class TableCard {
  cards: Card[];
  numberOfClosePairCards: number;
  openCard: Card;
  constructor() {
    this.cards = new Array<Card>();
    let c= new Card();
    let c1= new Card();
    let c2= new Card();
    let c3= new Card();
    let c4= new Card();
    this.cards.push(c,c1,c2,c3);
  }
}
