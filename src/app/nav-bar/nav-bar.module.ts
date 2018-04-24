import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { NavBarItemComponent } from './nav-bar/nav-bar-item/nav-bar-item.component';
import {RouterModule} from "@angular/router";
import { NavBarHeaderComponent } from './nav-bar/nav-bar-header/nav-bar-header.component';
import { NavBarContentComponent } from './nav-bar/nav-bar-content/nav-bar-content.component';
import {MatButton, MatButtonModule, MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
     NavBarComponent,
  HeaderComponent,
  NavBarItemComponent,
  NavBarHeaderComponent,
  NavBarContentComponent],
   exports: [CommonModule, NavBarHeaderComponent, NavBarComponent, HeaderComponent]
})
export class NavBarModule { }
