import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { ApiService } from './../../../Infraestructure/services/api.service';


@Component({
  selector: 'app-ine-front-validate',
  templateUrl: './ine-front-validate.page.html',
  styleUrls: ['./ine-front-validate.page.scss'],
})
export class IneFrontValidatePage implements OnInit {

 ngOnInit(): void {
 }
  constructor(
    private apiSvc: ApiService
  ) { }

//Mandar data
public sendINEFront()
{
  this.sendImageIneFront().then((result: Observable<any>) => {
    console.log('INE front result', result);
  });
}
public async sendImageIneFront(): Promise<Observable<any>> {
  const b64Image = localStorage.getItem("ineFront");
  console.log('b64Image', b64Image)
  const request = {
    "b64CredencialFrente":  b64Image
  };
  return this.apiSvc.getConsultaINEFrente(request);
}

}
