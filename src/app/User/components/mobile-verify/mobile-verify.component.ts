import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.component.html',
  styleUrls: ['./mobile-verify.component.css']
})
export class MobileVerifyComponent {


showOtp=false

  numberSubmit(){
 this.showOtp=true
  }

}
