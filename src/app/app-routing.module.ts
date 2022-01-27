import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';
import { HomeModuleModule } from './module/home-module/home-module.module';

const routes: Routes = [{path:'',loadChildren:()=>(import('./module/home-module/home-module-routing.module').then((x)=>x.HomeModuleRoutingModule))}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
