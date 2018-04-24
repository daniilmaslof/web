import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorRoutingModule } from './constructor-routing.module';
import { ConferenceComponent } from './conference/conference.component';
import {LectureComponent} from "../components/lecture/lecture.component";
import {SpeakerComponent} from "../components/speaker/speaker.component";
import {SpeakerElementComponent} from "../components/lecture/speaker-element/speaker-element.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {FileUploadModule} from "ng2-file-upload";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ImagePreviewDirective} from "../directive/image-preview.directive";
import { ConstructorComponent } from './constructor/constructor.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import {SectionComponent} from "../components/section/section.component";
import { SectionsComponent } from './conference/sections/sections.component';
import { SpeakersComponent } from './conference/speakers/speakers.component';
import {DialogOverviewExampleDialogComponent} from "../components/speaker/dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import {CanDeactiveGuardService} from "../services/can-deactive-guard.service";
import {AppModule} from "../app.module";
import { SpeakerCardComponent } from './conference/speakers/speaker-card/speaker-card.component';
import { ToolbarConferencesComponent } from './conference/toolbar-conferences/toolbar-conferences.component';
import { LecturesComponent } from './conference/lectures/lectures.component';
import { LectureCardComponent } from './conference/lectures/lecture-card/lecture-card.component';
import { DialogLectureComponent } from './conference/lectures/dialog-lecture/dialog-lecture.component';
import { SectionCardComponent } from './conference/sections/section-card/section-card.component';
import { SectionDialogComponent } from './conference/sections/section-dialog/section-dialog.component';
import {NavBarModule} from "../nav-bar/nav-bar.module";
import {NavBarComponent} from "../nav-bar/nav-bar/nav-bar.component";

@NgModule({
  imports: [
    CommonModule,
    ConstructorRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FileUploadModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule,
    MatPaginatorModule,
    NavBarModule
  ],
  declarations: [ImagePreviewDirective, SpeakerElementComponent, ConferenceComponent, LectureComponent, SpeakerComponent,
    ConstructorComponent,
    AddLectureComponent,
  SectionComponent,
  SectionsComponent,
  SpeakersComponent,
  DialogOverviewExampleDialogComponent,
  SpeakerCardComponent,
  ToolbarConferencesComponent,
  LecturesComponent,
  LectureCardComponent,
  DialogLectureComponent,
  SectionCardComponent,
  SectionDialogComponent],
  entryComponents: [DialogOverviewExampleDialogComponent, DialogLectureComponent],
}
  )
export class ConstructorModule { }
