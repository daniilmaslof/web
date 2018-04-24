import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Section} from "../../models/section";
import {Router} from "@angular/router";
import {FileUploader} from "ng2-file-upload";
const URL = 'http://localhost:8080';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  file: any;
  type: any;
  @ViewChild('f') form: FormGroup;
  model: Section = new Section();
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;
  public fileOverBase(e): void {
    this.hasBaseDropZoneOver = e;
    if (this.uploader.queue.length !== 0) {
      this.file = this.uploader.queue[0]._file;
      this.type = 'image';
    }
  }
  navigate(i) {
  }
  constructor() { }

  ngOnInit() {
  }

}
