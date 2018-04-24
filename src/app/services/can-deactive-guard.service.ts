import {Component, Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";

import {Speaker} from '../models/speaker';
import {Lecture} from "../models/lecture";
import {PostDataService} from "./post-data.service";
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class CanDeactiveGuardService implements CanDeactivate<CanComponentDeactivate> {

  constructor(public dialog: MatDialog, private router: Router, private postData: PostDataService) {
  }
  openDialog(companent, nextState ): Observable<boolean> {
    let answer;
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog,  {
      width: '400px',
      height: '350px',
      data: companent.model
    } as MatDialogConfig<any>);
   return dialogRef.afterClosed();
  }
  canDeactivate(component,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot) {

    console.log(route);
    console.log(nextState);
    let url: string = state.url;
    console.log('Url: ' + url);
    if (component.canDeactivate()) {
      return true;
    } else {
      this.openDialog(component, nextState).subscribe(
        data => {
          if (data === true) {
            this.router.navigateByUrl(nextState.url);
            component.sendData = true;
            console.log(component.model);
          } else if (data === false) {
            this.router.navigateByUrl(nextState.url);
            component.sendData = true;
          }
        });
    }
    // return component.canDeactivate ? component.canDeactivate() : true;
  }
}
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview.html'})
export class DialogOverviewExampleDialog {
  isSpeaker: boolean = false;
  isLecture: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    if (data instanceof Speaker) {
    this.isSpeaker = true;
  }
    if (data instanceof Lecture) {
      this.isLecture = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
