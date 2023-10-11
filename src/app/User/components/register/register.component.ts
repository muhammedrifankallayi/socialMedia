import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(private userservice:UserserviceService,private router:Router,private toaster:ToastrService){}
  registerForm!:FormGroup

  isvalidemail=true
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  isSubmit(){

    let user= this.registerForm.getRawValue()

    this.userservice.postregister(user).subscribe((res:any)=>{

      const token=res.token

      localStorage.setItem("usersecret",token)

      this.router.navigate(['login'])
      this.toaster.success('success')
      
    },(err)=>{
      this.toaster.error(err.error)
    })


    
 
  }

  get lname(){
    return  this.registerForm.get('lname')
  }

  get fname(){
    return  this.registerForm.get('fname')
  }

  get email(){
    return  this.registerForm.get('email')
  }

  get password(){
    return  this.registerForm.get('password')
  }
}
