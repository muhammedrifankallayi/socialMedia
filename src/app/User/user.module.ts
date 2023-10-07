import { CommonModule } from "@angular/common"
import {NgModule} from "@angular/core"
import { UserRoutingModule } from "./user-routing.module"
import {MatButtonModule} from "@angular/material/button"
import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from "./components/register/register.component"



@NgModule({
    declarations:[
        LoginComponent, 
        RegisterComponent
    ],
    imports:[
        CommonModule,
        UserRoutingModule,
        MatButtonModule
        

    ]
})


export class UsreModule{}