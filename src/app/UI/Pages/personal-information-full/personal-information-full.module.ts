import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInformationFullPageRoutingModule } from './personal-information-full-routing.module';

import { PersonalInformationFullPage } from './personal-information-full.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInformationFullPageRoutingModule
  ],
  declarations: [PersonalInformationFullPage]
})
export class PersonalInformationFullPageModule {}
