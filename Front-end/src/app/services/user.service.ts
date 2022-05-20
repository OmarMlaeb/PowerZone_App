import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  
  first_name: string,
  last_name: string,
  email_address: string,
  phone_number: string,
  password: string
  
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'http://localhost/PowerZone_Server/';

  constructor(private http: HttpClient) {

  }

  // add user account when signed up 
  addAccount(user: User){
    return this.http.post(this.url + 'signup.php', user);
  }

}
