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
import { FormsModule, ReactiveFormsModule } from "@angular/forms"


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';




const config= {
    apiKey: "AIzaSyCFAtjqp3f9kxpEYLX3lyTPTH6r25tyEpM",
    authDomain: "otp-with-number-b675c.firebaseapp.com",
    projectId: "otp-with-number-b675c",
    storageBucket: "otp-with-number-b675c.appspot.com",
    messagingSenderId: "232352623498",
    appId: "1:232352623498:web:fc2bd50d172eb6511d7673",
    measurementId: "G-L7G44BT2T9"
  }


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
        ReactiveFormsModule,
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        FormsModule
        
        

    ]
})



  

export class UsreModule{}

