import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LectureComponent} from "../components/lecture/lecture.component";
import {SpeakerComponent} from "../components/speaker/speaker.component";
import {ConstructorComponent} from "./constructor/constructor.component";
import {SectionComponent} from "../components/section/section.component";
import {SpeakersComponent} from "./conference/speakers/speakers.component";
import {CanDeactiveGuardService} from "../services/can-deactive-guard.service";
import {DialogOverviewExampleDialogComponent} from "../components/speaker/dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import {LecturesComponent} from "./conference/lectures/lectures.component";
import {SectionsComponent} from "./conference/sections/sections.component";
import {NavBarComponent} from "../nav-bar/nav-bar/nav-bar.component";
import {NavBarContentComponent} from "../nav-bar/nav-bar/nav-bar-content/nav-bar-content.component";

const constructorRoutes: Routes = [
  {
    path: '',
    component: ConstructorComponent,
    children: [
      {
        path: 'conference/:id/speakers',
        component: SpeakersComponent
      },
      {
        path: 'conference/:id/lectures',
        component: LecturesComponent
      },
      {
        path: 'conference/:id/sections',
        component: SectionsComponent
      },
      {
        path: 'conference/:id/speakers',
        outlet: 'sidemenu',
        component: NavBarContentComponent
      },
      {
        path: 'conference/:id/lectures',
        outlet: 'sidemenu',
        component: NavBarContentComponent
      },
      {
        path: 'conference/:id/sections',
        outlet: 'sidemenu',
        component: NavBarContentComponent
      }
    ]
  },
  // {
  //   path: '',
  //   outlet: 'sidemenu',
  //   component: NavBarContentComponent,
  // }
];
        //   path: 'conference/:id/section/:id/lecture/:id/speaker/:id',
      //   component: SpeakerComponent,
      //   canDeactivate: [CanDeactiveGuardService]
      // },
      // {
      //   path: 'conference/:id/section/:id/lecture/:id',
      //   component: LectureComponent
      // },
      // {
      //   path: 'conference/:id/section/:id',
      //   component: SectionComponent,
      // },
      // {
      //   path: 'conference/:id/speakers',
      //   component: SpeakersComponent
      // },
      // {
      //   path: 'NewSpeakers',
      //   component: SpeakerComponent,
      //   canDeactivate: [CanDeactiveGuardService]
      // },
      // {
      //   path: 'conference/:id/lectures',
      //   component: LecturesComponent
      // },
      // {
      //   path: 'conference/:id/sections',
      //   component: SectionsComponent
      // },
      //


@NgModule({
  imports: [RouterModule.forChild(constructorRoutes)],
  exports: [RouterModule]
})
export class ConstructorRoutingModule { }
