import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { LectureComponent } from './components/lecture/lecture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrComponent } from './components/registr/registr.component';
import { HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { StatusComponent } from './components/status/status.component';

const appRoutes: Routes = [
  { path: '**', component: LoginComponent },
  { path: 'register', component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    LoginComponent,
    RegistrComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
