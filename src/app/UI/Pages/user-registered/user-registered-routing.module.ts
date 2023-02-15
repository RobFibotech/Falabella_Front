import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegisteredPage } from './user-registered.page';

const routes: Routes = [
  {
    path: '',
    component: UserRegisteredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRegisteredPageRoutingModule {}
