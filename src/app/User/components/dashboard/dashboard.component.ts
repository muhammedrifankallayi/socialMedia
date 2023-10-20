import { Component ,OnInit} from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {

ngOnInit(): void {
  
}
  constructor(private service:UserserviceService){}


  formData = new FormGroup({
    name:new FormControl('',[Validators.required])
  })

  Generate(){
    console.log(this.formData.value.name);
this.service.adviceApi(this.formData.value.name).subscribe((res:any)=>{
 
  alert(res.slips[0].advice)
  this.formData.reset()
  
})
  }

}
