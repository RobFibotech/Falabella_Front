import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IneBackValidatePageRoutingModule } from './ine-back-validate-routing.module';

import { IneBackValidatePage } from './ine-back-validate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IneBackValidatePageRoutingModule
  ],
  declarations: [IneBackValidatePage]
})
export class IneBackValidatePageModule {}
