import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IneFrontPageRoutingModule } from './ine-front-routing.module';

import { IneFrontPage } from './ine-front.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IneFrontPageRoutingModule
  ],
  declarations: [IneFrontPage]
})
export class IneFrontPageModule {}
