import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IneBackPage } from './ine-back.page';

const routes: Routes = [
  {
    path: '',
    component: IneBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IneBackPageRoutingModule {}
