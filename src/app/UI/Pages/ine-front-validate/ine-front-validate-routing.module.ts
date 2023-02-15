import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IneFrontValidatePage } from './ine-front-validate.page';

const routes: Routes = [
  {
    path: '',
    component: IneFrontValidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IneFrontValidatePageRoutingModule {}
