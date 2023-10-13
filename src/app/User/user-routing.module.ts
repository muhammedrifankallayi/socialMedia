import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MobileVerifyComponent } from './components/mobile-verify/mobile-verify.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:"chatpage",component:ChatPageComponent},
  {path:"autherize",component:DashboardComponent},
  {path:"mobile-verify",component:MobileVerifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
