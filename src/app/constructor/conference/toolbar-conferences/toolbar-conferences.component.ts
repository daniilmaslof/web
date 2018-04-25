import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {NewSpeakerComponent} from "../speakers/speaker-card/new-speaker/new-speaker.component";

@Component({
  selector: 'app-toolbar-conferences',
  templateUrl: './toolbar-conferences.component.html',
  styleUrls: ['./toolbar-conferences.component.css']
})
export class ToolbarConferencesComponent implements OnInit {
  search: boolean = false;
  sort: boolean = false;
  @Input() titleToolbar: string;
  constructor(route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }
  showSearchBar() {
    this.search = true;
  }
  showSort() {
    this.sort = true;
  }
  close() {
    this.sort = false;
    this.search = false;
  }
  openDialog() {
    let dialogRef = this.dialog.open(NewSpeakerComponent, {
      width: '70vw',
      height: '89vh',
      data: {
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
  ngOnInit() {
  }

}
