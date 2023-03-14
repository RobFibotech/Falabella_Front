import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './../../../Infraestructure/services/api.service';

@Component({
  selector: 'app-ine-back-validate',
  templateUrl: './ine-back-validate.page.html',
  styleUrls: ['./ine-back-validate.page.scss'],
})
export class IneBackValidatePage implements OnInit {

  constructor(
    private apiSvc: ApiService
  ) { }


  ngOnInit() {
  }
  //Mandar data
public sendINEFront()
{
  this.sendImageIneBack().then((result: Observable<any>) => {
    console.log('INE front result', result);
  });
}
public async sendImageIneBack(): Promise<Observable<any>> {
  const b64Image = localStorage.getItem("ineFront");
  console.log('b64Image', b64Image)
  const request = {
    "b64CredencialAtras":  b64Image
  };
  return this.apiSvc.getConsultaINEReverso(request);
}


}
