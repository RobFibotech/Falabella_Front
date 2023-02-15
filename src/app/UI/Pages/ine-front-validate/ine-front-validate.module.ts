import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IneFrontValidatePageRoutingModule } from './ine-front-validate-routing.module';

import { IneFrontValidatePage } from './ine-front-validate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IneFrontValidatePageRoutingModule
  ],
  declarations: [IneFrontValidatePage]
})
export class IneFrontValidatePageModule {}
