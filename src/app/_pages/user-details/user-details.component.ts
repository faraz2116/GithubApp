import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { InfoService } from '../../_services/info/info.service';
import { ApiServiceService } from '../../_services/api-service.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  userName : string;
  // to unsubscribe the subscription
  detailedUserInfoSubscription: any;
  // User Details
  detailedData: any;

  constructor(private _infoService: InfoService,
    private _apiService: ApiServiceService,
    private _location: Location,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  private userSubscription = this._activatedRoute.queryParams.subscribe( params => {
    if(params['name']){
      this.userName = params['name'];
    }
  })

  ngOnInit() {
    let self = this;
    console.log("User name",self.userName);
    self.detailedUserInfoSubscription = self._apiService.getUserDetailsByName(self.userName).subscribe(detailedData => {
      if(detailedData){
        console.log("detailedData",detailedData);
        self.detailedData = detailedData;
      }
    })
    
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  showRepos(){
    console.log('khkhfdjhhfkjh');
  }

  showFollowers(login){
    this._router.navigate(['showFollowers'], { queryParams : {
       name : login
    }})
  }

  goBack(){
    this._location.back();
  }

}
