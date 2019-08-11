import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './_services/api-service.service';
import { USER_DATA } from './const-data/user-data.config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github App';
  users : any = [];
  constructor( private api_service: ApiServiceService){}
  
  ngOnInit(){
    let self = this;
    self.users = USER_DATA;    
    self.api_service.getGitHubUserData().subscribe((data)=>{
      if(data){
        console.log("Github Users ==>>",data);
        
      }
    });
  }
}
