import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../../../../models/section';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css']
})
export class SectionCardComponent implements OnInit {
  @Input() section: Section;
  constructor() { }

  ngOnInit() {
  }

}
