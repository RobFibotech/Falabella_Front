import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurpPageRoutingModule } from './curp-routing.module';

import { CurpPage } from './curp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurpPageRoutingModule
  ],
  declarations: [CurpPage]
})
export class CurpPageModule {}
