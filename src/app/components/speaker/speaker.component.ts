import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Speaker} from "../../models/speaker";
 import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import {Router} from "@angular/router";
import {GetDataService} from "../../services/get-data.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogConfig, MatChipInputEvent} from "@angular/material";
import {DialogOverviewExampleDialogComponent} from "./dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {CanComponentDeactivate} from "../../services/can-deactive-guard.service";
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css'],
  providers: [GetDataService]
})
export class SpeakerComponent implements OnInit, CanComponentDeactivate {
  file: any;
  type: any;
  animal: string;
  name: string;
  sendData = false;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];
  @Input() speakers: Speaker[];
  @ViewChild('f') form: FormGroup;
  model: Speaker;
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;
  public fileOverBase(e): void {
    this.hasBaseDropZoneOver = e;
    if (this.uploader.queue.length !== 0) {
      this.file = this.uploader.queue[0]._file;
      this.type = 'image';
    }
    }
  onSubmit() {
     this.uploader.uploadAll();
    this.form.reset();
    this.router.navigateByUrl('lecture');

  }
  constructor( private router: Router, private  getData: GetDataService, public dialog: MatDialog) {
  }
  canDeactivate() {
    console.log(this.form.dirty);
    return this.sendData || !this.form.touched ;
  }
  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent,  {
  //     width: '600px',
  //     height: '89vh',
  //     data: {
  //       speaker: this.model
  //     },
  //     panelClass: 'my-dialog'
  //   } as MatDialogConfig<any>);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.model.tagsSpeaker.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    let index = this.model.tagsSpeaker.indexOf(tag);

    if (index >= 0) {
      this.model.tagsSpeaker.splice(index, 1);
    }
  }
ngOnInit() {
     this.model = new Speaker();
    //  this.getData.getData(this.router.url).subscribe(
    //    data => { this.model = data; }
    // );
}
}

