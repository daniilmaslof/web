import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarConferencesComponent } from './toolbar-conferences.component';

describe('ToolbarConferencesComponent', () => {
  let component: ToolbarConferencesComponent;
  let fixture: ComponentFixture<ToolbarConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
