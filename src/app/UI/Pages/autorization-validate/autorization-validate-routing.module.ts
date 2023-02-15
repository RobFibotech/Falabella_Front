import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizationValidatePage } from './autorization-validate.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizationValidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizationValidatePageRoutingModule {}
