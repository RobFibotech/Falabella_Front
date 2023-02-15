import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-ine-front-validate',
  templateUrl: './ine-front-validate.page.html',
  styleUrls: ['./ine-front-validate.page.scss'],
})
export class IneFrontValidatePage implements OnInit {

 ngOnInit(): void {
 }

 // latest snapshot
 public webcamImage: WebcamImage | undefined;

 // webcam snapshot trigger
 private trigger: Subject<void> = new Subject<void>();
 triggerSnapshot(): void {
  this.trigger.next();
 }
 handleImage(webcamImage:WebcamImage): void {
  console.info('received webcam image', webcamImage);
  this.webcamImage = webcamImage;
 }

 public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
 }

}
