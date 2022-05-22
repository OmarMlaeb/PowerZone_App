import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Quote{

  id: number,
  quote : string, 
  person: string

}

@Injectable({
  providedIn: 'root'
})

export class QuoteService {

  constructor(private http: HttpClient) {

  }
  
  getQuote(){
    return this.http.get<Quote>("https://motivational-quote-api.herokuapp.com/quotes/random")
  }

}
