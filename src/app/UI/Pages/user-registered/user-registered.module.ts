import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRegisteredPageRoutingModule } from './user-registered-routing.module';

import { UserRegisteredPage } from './user-registered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRegisteredPageRoutingModule
  ],
  declarations: [UserRegisteredPage]
})
export class UserRegisteredPageModule {}
