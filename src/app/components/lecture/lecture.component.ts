import {Component, NgModule, OnInit} from '@angular/core';
import {Lecture} from '../../models/lecture';
import {ViewChild } from '@angular/core';
import {FormsModule, FormControl, FormGroup} from '@angular/forms';
import {Speaker} from "../../models/speaker";
import {ActivatedRoute, CanDeactivate, Router} from "@angular/router";
import {GetDataService} from "../../services/get-data.service";
import {PostDataService} from "../../services/post-data.service";
import {CanComponentDeactivate} from "../../services/can-deactive-guard.service";


@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css'],
  providers: [GetDataService, PostDataService]
})
export class LectureComponent implements OnInit {
@ViewChild('f') form: FormGroup;
  model: Lecture;
  constructor(private router: Router, private  getData: GetDataService, private  postData: PostDataService, private route: ActivatedRoute) {
  }
//   navigae(i, speaker: Speaker) {
//     console.log(i);
//     this.router.navigate([],{} );
//   }
//   canDeactivate() {
//     return this.form.touched;
//   }
// onSubmit() {
//     this.postData.postData(this.router.url, this.form.value);
//     console.log(this.form.value);
//     console.log(this.model);
// }
// addSpeaker() {
//   this.router.navigateByUrl(`/speaker`);
//
// }
  ngOnInit() {
    // this.model = new Lecture();
    // console.log(this.model);
  }

}
