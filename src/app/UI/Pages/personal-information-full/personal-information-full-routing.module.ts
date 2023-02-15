import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInformationFullPage } from './personal-information-full.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInformationFullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInformationFullPageRoutingModule {}
