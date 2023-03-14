import { Component, OnInit } from '@angular/core';
import { Curp } from 'src/app/Domain/Models/curp';
import { ApiService } from 'src/app/Infraestructure/services/api.service';


@Component({
  selector: 'app-curp',
  templateUrl: './curp.page.html',
  styleUrls: ['./curp.page.scss'],
})
export class CurpPage implements OnInit {


  curpModel = new Curp;
  curpModelMap: Map<string, string>;
  requestApi:any;
  responseApi=[];
  constructor(private apiSvc: ApiService) {
    this.curpModelMap = JSON.parse(localStorage.getItem("curpModel") || "");
    this.curpModel.tipo_busqueda = "curp";

    this.curpModel.tipo_busqueda=  this.curpModelMap.get("tipo_busqueda") || "";
    this.curpModel.clave_entidad=  this.curpModelMap.get("clave_entidad") || "";
    this.curpModel.dia_nacimiento= this.curpModelMap.get("dia_nacimiento") || "";
    this.curpModel.mes_nacimiento= this.curpModelMap.get("mes_nacimiento") || "";
    this.curpModel.nombres = this.curpModelMap.get("nombres") || "";
    this.curpModel.primer_apellido= this.curpModelMap.get("primer_apellido") || "";
    this.curpModel.segundo_apellido= this.curpModelMap.get("segundo_apellido") || "";
    this.curpModel.anio_nacimiento= this.curpModelMap.get("anio_nacimiento") || "";
    this.curpModel.sexo= this.curpModelMap.get("sexo") || "";
  }

  ngOnInit() {
  }

  async validateCurp()
  {
    const result = await this.apiSvc.getCURP(this.curpModel);
    console.log('resultado de la validación del curp', result);
  }

}
