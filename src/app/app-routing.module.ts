import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./UI/Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./UI/Pages/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'personal-information-full',
    loadChildren: () => import('./UI/Pages/personal-information-full/personal-information-full.module').then( m => m.PersonalInformationFullPageModule)
  },
  {
    path: 'curp',
    loadChildren: () => import('./UI/Pages/curp/curp.module').then( m => m.CurpPageModule)
  },
  {
    path: 'domicilio',
    loadChildren: () => import('./UI/Pages/domicilio/domicilio.module').then( m => m.DomicilioPageModule)
  },
  {
    path: 'authorization',
    loadChildren: () => import('./UI/Pages/authorization/authorization.module').then( m => m.AuthorizationPageModule)
  },
  {
    path: 'autorization-validate',
    loadChildren: () => import('./UI/Pages/autorization-validate/autorization-validate.module').then( m => m.AutorizationValidatePageModule)
  },
  {
    path: 'ine-front',
    loadChildren: () => import('./UI/Pages/ine-front/ine-front.module').then( m => m.IneFrontPageModule)
  },
  {
    path: 'ine-front-validate',
    loadChildren: () => import('./UI/Pages/ine-front-validate/ine-front-validate.module').then( m => m.IneFrontValidatePageModule)
  },
  {
    path: 'ine-back',
    loadChildren: () => import('./UI/Pages/ine-back/ine-back.module').then( m => m.IneBackPageModule)
  },
  {
    path: 'ine-back-validate',
    loadChildren: () => import('./UI/Pages/ine-back-validate/ine-back-validate.module').then( m => m.IneBackValidatePageModule)
  },
  {
    path: 'user-registered',
    loadChildren: () => import('./UI/Pages/user-registered/user-registered.module').then( m => m.UserRegisteredPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
