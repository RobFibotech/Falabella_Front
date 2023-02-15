import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IneBackPageRoutingModule } from './ine-back-routing.module';

import { IneBackPage } from './ine-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IneBackPageRoutingModule
  ],
  declarations: [IneBackPage]
})
export class IneBackPageModule {}
