import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/Infraestructure/services/generic.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(public gService: GenericService,) { }

  ngOnInit() {
  }

}
