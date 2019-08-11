import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  // Observalbe Souce that used as a buffer for staoring the users info
  private _userNameSource = new BehaviorSubject<any>(0);
  userData$ = this._userNameSource.asObservable();
  
  constructor() { }

  // method used for storing the userData
  changeUserData(userData){
    this._userNameSource.next(userData);
  }
}
