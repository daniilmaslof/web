import {Component, Input, OnInit} from '@angular/core';
import {Speaker} from "../../../../models/speaker";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogOverviewExampleDialogComponent} from "../../../../components/speaker/dialog-overview-example-dialog/dialog-overview-example-dialog.component";

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.css']
})
export class SpeakerCardComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor(private  route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '70vw',
      height: '89vh',
      data: {
        speaker: this.speaker
      },
      panelClass: 'dialog-no-padding-panel'
    } as MatDialogConfig<any>);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    dialogRef.backdropClick().subscribe(
      result => {
        console.log('The dialog was clicked');
        console.log(result);
      });
  }
  ngOnInit() {}
}
