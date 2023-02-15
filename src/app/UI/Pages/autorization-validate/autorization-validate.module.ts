import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizationValidatePageRoutingModule } from './autorization-validate-routing.module';

import { AutorizationValidatePage } from './autorization-validate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizationValidatePageRoutingModule
  ],
  declarations: [AutorizationValidatePage]
})
export class AutorizationValidatePageModule {}
