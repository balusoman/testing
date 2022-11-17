import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'landing',
    pathMatch:'full'
  },
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
