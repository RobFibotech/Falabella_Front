import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IneFrontPage } from './ine-front.page';

const routes: Routes = [
  {
    path: '',
    component: IneFrontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IneFrontPageRoutingModule {}
