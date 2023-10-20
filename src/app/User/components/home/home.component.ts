import { Component ,OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserserviceService } from '../../service/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private socket:Socket , private service:UserserviceService){}
chatdata:any
adminId= ''
userId = ''


ngOnInit(): void {
  this.socket.on("message recieved",(message:any)=>{
    if(!this.chatdata){   this.chatdata=[]  }

    this.chatdata.push(message)
// for scrolling to bottom automatically
    setTimeout(() => {
      this.scrollToBottom()
    });
  })

}

id='sadf'
// getChat data 

getData(){
  this.service.getChatData(this.id).subscribe((res:any)=>{
    this.chatdata = res.data
    this.adminId = res.id
    this.socket.emit('setup',this.adminId) 
    this.socket.emit('join',res.cId) 
    console.log(res);
    alert("success")
    setTimeout(()=>{
      this.scrollToBottom()
    })
  })
}
// senting chat message to another user

FormData = new FormGroup({
  text:new FormControl("",[Validators.required])
})

submit(){
  const text = this.FormData.value.text
  const data = {text:text,user_id:this.userId}
  this.service.submitChatMsg(data).subscribe((res:any)=>{
    this.socket.emit("chatMessage",res.data)
    this.chatdata.push(res.data)
    this.FormData.reset()
  
    setTimeout(() => {
      this.scrollToBottom()
    } );
  },(err:any)=>{
  alert(err.error.message)
  })
}




//Bottom scrolling Function
scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight)
}



}
