import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params} from '@angular/router'
import { ApiServiceService } from '../../_services/api-service.service';
import { InfoService } from '../../_services/info/info.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users : any = [];
  // Search Form
  serachForm: FormGroup;
  // Flag to check if User tried to click any button like Previous/Next/Submit
	userClickedBtn: boolean = false;

  constructor( private api_service: ApiServiceService, 
    private _formBuilder: FormBuilder,
    private infoService: InfoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute){
    this.serachForm = this._formBuilder.group({
      search_field: ['', Validators.required]
    });

  }
  
  ngOnInit(){
    let self = this;
    // Fetching All the Github User Data
    self.api_service.getGitHubUserData().subscribe((data)=>{
      if(data){
        self.users = data
        console.log("Github Users ==>>",data);
      }
    });
  }

  // serach GitHub User By Name
  search(){
    let self = this;
    const searchBy = this.serachForm.controls['search_field'].value;
    // checking for the validation of the form
  	if(self.validateForm()){
      self.userClickedBtn = false;
      self.api_service.getGithubUserByName(searchBy).subscribe(data => {
        if(data){
          console.log("Search Data", data)
          self.users = data.items
        }
      })
    }else{
      this.userClickedBtn = true;
    }
  }

  dsplayUserInfo(userInfo){
    let self = this;
    self.infoService.changeUserData(userInfo);
    self._router.navigate(['/userDetails'], {
      queryParams: {
        name: userInfo.login
      }
    })
  }

  validateForm(){
    if(this.serachForm.valid){
      return true;
    }else{
      return false;
    }
  }

}
