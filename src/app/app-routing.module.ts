import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",loadChildren:()=>import("./User/user.module").then((x)=>x.UsreModule)},

  {path:"admin",loadChildren:()=>import("./Admin/admin.module").then((x)=>x.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
