import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curp } from 'src/app/Domain/Models/curp';
import { ApiService } from 'src/app/Infraestructure/services/api.service';

@Component({
  selector: 'app-personal-information-full',
  templateUrl: './personal-information-full.page.html',
  styleUrls: ['./personal-information-full.page.scss'],
})
export class PersonalInformationFullPage implements OnInit {

  curpModel = new Curp;
  requestApi:any;
  responseApi=[];

  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit() {
  }

  calculateCurp()
  {

    this.curpModel.tipo_busqueda="datos";
    this.curpModel.clave_entidad="SR";
    this.curpModel.dia_nacimiento="05";
    this.curpModel.mes_nacimiento="09";
    this.curpModel.nombres= "HANS";
    this.curpModel.primer_apellido="VILLA";
    this.curpModel.segundo_apellido="SANCHEZ";
    this.curpModel.anio_nacimiento="1976";
    this.curpModel.sexo="H";
    const curpModelMap = {
      "tipo_busqueda": this.curpModel.tipo_busqueda,
      "clave_entidad": this.curpModel.clave_entidad,
      "dia_nacimiento": this.curpModel.dia_nacimiento,
      "mes_nacimiento": this.curpModel.mes_nacimiento,
      "nombres": this.curpModel.nombres,
      "primer_apellido": this.curpModel.primer_apellido,
      "segundo_apellido": this.curpModel.segundo_apellido,
      "anio_nacimiento": this.curpModel.anio_nacimiento,
      "sexo": this.curpModel.sexo,
    };
    localStorage.setItem("curpModel", JSON.stringify(curpModelMap))
    this.requestApi = this.apiSvc.getCURP(this.curpModel)
      .subscribe((res: any) => {
        this.responseApi = res.data;
        console.log(this.responseApi)
      }, (error) => {
        console.log("");
      });

  }

  prueba()
  {
    this.requestApi = this.apiSvc.getPrueba("EICG9506281I7")
      .subscribe((res: any) => {
        this.responseApi = res.data;
        console.log(this.responseApi)
      }, (error) => {
        console.log("");
      });
  }

}
