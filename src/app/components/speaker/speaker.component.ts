import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Speaker} from "../../models/speaker";
 import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import {Router} from "@angular/router";
import {GetDataService} from "../../services/get-data.service";
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css'],
  providers: [GetDataService]
})
export class SpeakerComponent implements OnInit {
  file: any;
  type: any;
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
  constructor( private router: Router, private  getData: GetDataService) {
  }
ngOnInit() {
     this.model = new Speaker();
    //  this.getData.getData(this.router.url).subscribe(
    //    data => { this.model = data; }
    // );
}
}
