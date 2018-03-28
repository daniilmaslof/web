import {Component, Input, OnInit} from '@angular/core';
import {Speaker} from "../../../models/speaker";
import {Router} from "@angular/router";

@Component({
  selector: 'app-speaker-element',
  templateUrl: './speaker-element.component.html',
  styleUrls: ['./speaker-element.component.css']
})
export class SpeakerElementComponent implements OnInit {
@Input() speaker: Speaker;
  constructor(private router: Router) { }
  navigae() {
    this.router.navigateByUrl('speaker');
  }
  ngOnInit() {
  }

}
