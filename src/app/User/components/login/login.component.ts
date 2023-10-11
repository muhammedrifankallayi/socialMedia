import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserserviceService,private router:Router,private toaster:ToastrService){}
  loginform!:FormGroup
  ngOnInit(): void {
    this.loginform= new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  isSubmit(){
    let user= this.loginform.getRawValue()

    this.userservice.postlogin(user).subscribe((res:any)=>{
      const token=res.token
      localStorage.setItem("usersecret",token)
      this.toaster.success('success')
      
    },(err)=>{
      this.toaster.error(err.error)
    })
  }

  
  get email(){
    return  this.loginform.get('email')
  }

  get password(){
    return  this.loginform.get('password')
  }
}
