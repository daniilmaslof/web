import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLectureComponent } from './dialog-lecture.component';

describe('DialogLectureComponent', () => {
  let component: DialogLectureComponent;
  let fixture: ComponentFixture<DialogLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
