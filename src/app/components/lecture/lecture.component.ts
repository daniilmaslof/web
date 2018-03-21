import {Component, NgModule, OnInit} from '@angular/core';
import {Lecture} from '../../models/lecture';
import {ViewChild } from '@angular/core';
import {FormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
@ViewChild('f') form: FormGroup;
  model: Lecture = new Lecture();
  constructor() {
  }
onSubmit() {
    console.log(this.form.value);
}
  ngOnInit() {
  }

}
