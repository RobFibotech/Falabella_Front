import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurpPage } from './curp.page';

const routes: Routes = [
  {
    path: '',
    component: CurpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurpPageRoutingModule {}
