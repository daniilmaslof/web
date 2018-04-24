import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormGroup} from "@angular/forms";
import {Lecture} from "../../../../models/lecture";
import {FileUploader} from "ng2-file-upload";
import {MAT_DIALOG_DATA, MatChipInputEvent, MatDialog, MatDialogRef} from "@angular/material";
import {GetDataService} from "../../../../services/get-data.service";
import {Router} from "@angular/router";
const URL = 'http://localhost';
@Component({
  selector: 'app-dialog-lecture',
  templateUrl: './dialog-lecture.component.html',
  styleUrls: ['./dialog-lecture.component.css'],
  providers: [GetDataService]
})
export class DialogLectureComponent implements OnInit {
  file: any;
  type: any;
  name: string;
  sendData = false;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  public hasBaseDropZoneOver: boolean = false;
  separatorKeysCodes = [ENTER, COMMA];
  @ViewChild('f') form: FormGroup;
  model: Lecture;
  public uploaderPhoto: FileUploader = new FileUploader({url: URL});
  public uploaderFile: FileUploader = new FileUploader({url: URL});
  constructor(
    public dialogRef: MatDialogRef<DialogLectureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private  getData: GetDataService, public dialog: MatDialog) {
    this.model = data.lecture;
  }
  public fileOverBase(e): void {
    this.hasBaseDropZoneOver = e;
    if (this.uploaderPhoto.queue.length !== 0) {
      this.file = this.uploaderPhoto.queue[0]._file;
      this.type = 'image';
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    this.uploaderPhoto.uploadAll();
    this.form.reset();
    this.router.navigateByUrl('lecture');

  }
  // canDeactivate() {
  //   console.log(this.form.dirty);
  //   return this.sendData || !this.form.touched ;
  // }
  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent,  {
  //     width: '100vw',
  //     height: '96vh',
  //     data: {
  //       speaker: this.model
  //     }
  //   } as MatDialogConfig<any>);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  addTag(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.model.tagsLecture.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  removeTag(tag: any): void {
    let index = this.model.tagsLecture.indexOf(tag);

    if (index >= 0) {
      this.model.tagsLecture.splice(index, 1);
    }
  }
  ngOnInit() {
    // this.model = new Speaker();
    //  this.getData.getData(this.router.url).subscribe(
    //    data => { this.model = data; }
    // );
  }

}
