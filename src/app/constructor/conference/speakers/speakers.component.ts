import { Component, OnInit } from '@angular/core';
import {Speaker} from "../../../models/speaker";
import {Conference} from "../../../models/Conference";
import {ActivatedRoute, Router} from "@angular/router";
import {Speakers} from "../../../models/Speakers";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {DialogOverviewExampleDialogComponent} from "../../../components/speaker/dialog-overview-example-dialog/dialog-overview-example-dialog.component";

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

speakers: Speakers;

  constructor(private  route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }
  navigate(speaker: Speaker) {
    this.router.navigate
    (['/constructor/conference', speaker.conference_id, 'section', speaker.section_id, 'lecture', speaker.lection_id,
    'speaker', speaker.id] );
}
  openDialog() {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent,  {
      width: '70vw',
      height: '89vh',
      data: {
        speaker: this.speakers
      },
      panelClass: 'dialog-no-padding-panel'
    } as MatDialogConfig<any>);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.speakers = new Speakers();
  }

}
