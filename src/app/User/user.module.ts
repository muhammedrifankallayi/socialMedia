import { CommonModule } from "@angular/common"
import {NgModule} from "@angular/core"
import { UserRoutingModule } from "./user-routing.module"
import {MatButtonModule} from "@angular/material/button"
import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from './components/home/home.component'
import {MatIconModule} from "@angular/material/icon";
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MobileVerifyComponent } from './components/mobile-verify/mobile-verify.component'
import { ReactiveFormsModule } from "@angular/forms"


@NgModule({
    declarations:[
        LoginComponent, 
        RegisterComponent, HomeComponent, ChatPageComponent, DashboardComponent, MobileVerifyComponent
    ],
    imports:[
        CommonModule,
        UserRoutingModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule
        

    ]
})


export class UsreModule{}