import {AnimationStack} from './AnimationStack';
import {Speaker} from "../models/speaker";

export class Card {
  animationStack: AnimationStack;
  name: string;
  urlFaceCard: string;
  urlShirtCard: string;
  isOpen: boolean;
  dataTid: string;
  speaker: Speaker;
  currentUrlImage: string;
  rotate180(): AnimationStack  {
    this.animationStack.setNextAnimation('rotate0', 'rotate90', 'rotate0');
    return this.animationStack;
  }
  rotate360(): AnimationStack {
    this.animationStack.setNextAnimation('rotate0', 'rotate90', 'rotate0', 'rotate90', 'rotate0');
    return this.animationStack;
  }
  changeCurrentImage() {
    if (this.currentUrlImage === this.urlShirtCard) {
      this.currentUrlImage = this.urlFaceCard;
    } else {
      this.currentUrlImage = this.urlShirtCard;
    }
  }
  constructor () {
    this.speaker = new Speaker;
    this.name = '';
    this.urlFaceCard = '';
    this.animationStack = new AnimationStack();
    this.isOpen = false;
    this.urlShirtCard = 'https://firebasestorage.googleapis.com/v0/b/danilmaslov-918b8.appspot.com/o/shirt.png?alt=media&token=b33e630e-112c-4a92-a0d3-f40a540ffa66';
    this.currentUrlImage = this.urlShirtCard;
  }
}
