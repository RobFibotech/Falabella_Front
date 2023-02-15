import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IneBackValidatePage } from './ine-back-validate.page';

const routes: Routes = [
  {
    path: '',
    component: IneBackValidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IneBackValidatePageRoutingModule {}
