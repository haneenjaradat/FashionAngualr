import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HomeComponent } from 'src/app/HomePage/home/home.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'about',component:AboutComponent},{path:'Contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
