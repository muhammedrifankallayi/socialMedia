import { CommonModule } from "@angular/common"
import {NgModule} from "@angular/core"
import { UserRoutingModule } from "./user-routing.module"
import {MatButtonModule} from "@angular/material/button"
import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from './components/home/home.component'
import {MatIconModule} from "@angular/material/icon"


@NgModule({
    declarations:[
        LoginComponent, 
        RegisterComponent, HomeComponent
    ],
    imports:[
        CommonModule,
        UserRoutingModule,
        MatButtonModule,
        MatIconModule
        

    ]
})


export class UsreModule{}