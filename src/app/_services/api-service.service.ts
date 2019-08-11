import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private _baseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  // Common Method to call API
  execute(request: string, url: string, data: any) {
    // JSON API
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    // this.http.post() or this.http.get()
    if (request == 'get') {
        return this.http.get<any>(url, httpOptions);
    } else {
        return this.http.post<any>(url, data, httpOptions);
    }
  }

  // Common Method for Posting Data
  post(url: string, data: any) {
      return this.execute('post', url, data);
  }

  // Common Method for Posting Data
  get(url: string) {
      return this.execute('get', url, null);
  }

  getGitHubUserData(){
    return this.get(this._baseUrl)
  }
}
