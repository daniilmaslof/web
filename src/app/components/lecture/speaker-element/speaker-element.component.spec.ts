import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerElementComponent } from './speaker-element.component';

describe('SpeakerElementComponent', () => {
  let component: SpeakerElementComponent;
  let fixture: ComponentFixture<SpeakerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
