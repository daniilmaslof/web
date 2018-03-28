import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { LectureComponent } from './components/lecture/lecture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrComponent } from './components/registr/registr.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { StatusComponent } from './components/status/status.component';
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import {EnsureAuthenticatedService} from "./services/ensure-authenticated.service";
import { SpeakerComponent } from './components/speaker/speaker.component';
 import { FileUploadModule } from 'ng2-file-upload';
import { SpeakerElementComponent } from './components/lecture/speaker-element/speaker-element.component';
import { SectionComponent } from './components/section/section.component';
import {
  MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatNativeDateModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ImagePreviewDirective } from './directive/image-preview.directive';

const appRoutes: Routes = [
  { path: 'lecture', component: LectureComponent },
  { path: 'speaker', component: SpeakerComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: LoginComponent, canActivate: [EnsureAuthenticatedService]}
];
@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    LoginComponent,
    RegistrComponent,
    StatusComponent,
    SpeakerComponent,
    SpeakerElementComponent,
    SectionComponent,
    ImagePreviewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FileUploadModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
