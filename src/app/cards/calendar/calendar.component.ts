import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TableCard} from "../TableCard";
import {Card} from "../Card";
import {isNullOrUndefined} from "util";
import {animationCard} from "../animation";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: animationCard,
})
export class CalendarComponent implements OnInit {
  cardTable: TableCard;
  enableAnimation = false;

  constructor(private  ref: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit() {
    this.cardTable = new TableCard();
    // this.UploadService.getCard().subscribe(
    //   data => {
    //     if (!this.ref['destroyed']) {
    //       this.ref.detectChanges();
    //     }
    //     this.cardTable = new TableCard(data);
    //   }
    // );
    // setTimeout(
    //   () => {
    //     this.cardTable.cards.forEach(
    //       (card) => {
    //         this.enableAnimation = true;
    //         card.animationStack.shiftAnimationStack();
    //       }
    //     );
    //   }, 5000 );
  }

  openDifferentCards(card: Card) {
    this.cardTable.openCard.rotate180();
    card.rotate360();
    this.cardTable.openCard.isOpen = false;
    card.isOpen = false;
  }

  openSameCards(card: Card) {
    card.rotate180().setNextAnimation('leave');
    this.cardTable.openCard.animationStack.setNextAnimation('leave');
    this.cardTable.numberOfClosePairCards--;
    if (this.cardTable.numberOfClosePairCards === 0) {
      this.router.navigate(['end']);
    }
  }

  reload() {
    // location.reload();
    this.router.navigate(['start']).then(
      () => {
        this.router.navigate(['game']);
      }
    );
  }

  clickCards(card: Card) {
    console.log(card);
    if (true) {
      card.isOpen = true;
      console.log(card);
      if (isNullOrUndefined(this.cardTable.openCard)) {
        this.cardTable.openCard = card;
        card.rotate180();
      } else {
        this.cardTable.openCard.animationStack.setNextAnimation('wait');
        if (this.cardTable.openCard.name === card.name) {
          this.openSameCards(card);
        } else {
          this.openDifferentCards(card);
        }
        this.cardTable.openCard = null;
      }
    }
  }

  onDone($event, card: Card) {
    if (true) {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
      if ($event.toState === 'rotate90') {
        card.changeCurrentImage();
      }
      if ($event.toState === 'leave') {
        this.router.navigateByUrl('constructor/conference/:id/section/:id/lecture/:id/speaker/:id');
      }
    }
    card.animationStack.shiftAnimationStack();
  }
}


