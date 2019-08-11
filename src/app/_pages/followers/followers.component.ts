import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiServiceService } from '../../_services/api-service.service'

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  loginName: any;
  followers: any;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiServiceService,
    private _location : Location
  ) { }

  private followersSubscriber = this._activatedRoute.queryParams.subscribe( params => {
    if(params['name']){
      this.loginName = params['name'];
    }
  })

  ngOnInit() {
    this._apiService.getFollowersByName(this.loginName).subscribe(followersData => {
      if(followersData){
        this.followers = followersData
      }
    })
  }

  goBack(){
    this._location.back();
  }

}
