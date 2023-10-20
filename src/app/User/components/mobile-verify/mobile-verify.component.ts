import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.component.html',
  styleUrls: ['./mobile-verify.component.css']
})
export class MobileVerifyComponent {
w="helloworldsss"
  advice:string =''
showOtp=false

  numberSubmit(){
 this.showOtp=true
  }




  run() {
    this.advice=''
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < this.w.length) {
        this.advice += this.w[i];
        i++;
      } else {
        clearInterval(intervalId);

      }
    }, 35);
  }
  

}