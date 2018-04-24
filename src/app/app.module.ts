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
import {AuthInterceptorService} from './services/auth-interceptor.service';
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service';
import { SpeakerComponent } from './components/speaker/speaker.component';
 import { FileUploadModule } from 'ng2-file-upload';
import { SpeakerElementComponent } from './components/lecture/speaker-element/speaker-element.component';
import { SectionComponent } from './components/section/section.component';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImagePreviewDirective } from './directive/image-preview.directive';
import { DialogOverviewExampleDialogComponent } from './components/speaker/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {CanDeactiveGuardService, DialogOverviewExampleDialog} from "./services/can-deactive-guard.service";
import {PostDataService} from "./services/post-data.service";
import { LandingComponent } from './components/landing/landing.component';
import { FullpageDirective } from './directive/fullpage.directive';
import { HtmlComponent } from './components/html/html/html.component';
import {CalendarComponent} from "./cards/calendar/calendar.component";
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {NavBarComponent} from "./nav-bar/nav-bar/nav-bar.component";
import { MainComponent } from './main/main.component';
import {NavBarContentComponent} from "./nav-bar/nav-bar/nav-bar-content/nav-bar-content.component";
const appRoutes: Routes = [
  {
    path: 'constructor',
    loadChildren: 'app/constructor/constructor.module#ConstructorModule'
  },
  {
    path: 'constructor',
    outlet: 'sidemenu',
    component: NavBarContentComponent
  },
  // {
  //   path: '',
  //   redirectTo: '/constructor',
  //   pathMatch: 'full'
  // },
  {
    path: 'landing',
    component: LandingComponent
  },

  {
    path: '',
    component: MainComponent,
  },
  {
    path: '',
    outlet: 'sidemenu',
    component: NavBarComponent
  },
  {
    path: 'home',
    component: HtmlComponent,
  },
  {
    path: 'home',
    outlet: 'sidemenu',
    component: NavBarComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrComponent,
    StatusComponent,
    DialogOverviewExampleDialog,
    LandingComponent,
    FullpageDirective,
    HtmlComponent,
    CalendarComponent,
    MainComponent
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FileUploadModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule,
    NavBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
CanDeactiveGuardService,
    PostDataService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
