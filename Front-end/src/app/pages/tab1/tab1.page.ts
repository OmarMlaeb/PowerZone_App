import { Component, OnInit } from '@angular/core';
import { QuoteService, Quote } from 'src/app/services/quote.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  constructor(private service: QuoteService) {

  }

  quote_of_the_day: Quote;
  hour = new Date().getHours();
  greeting: string;
  person: any;
  quote: any;
  
  setGreeting() {

    console.log(this.hour);
    if(this.hour >= 5 && this.hour < 12) {
      this.greeting = "Good Morning!"
    } 
    else if(this.hour >= 12 && this.hour <= 18) {
      this.greeting = "Good After Noon!"
    }
    else {
      this.greeting = "Good Evening!";
    }
  }

  ngOnInit() {

    this.service.getQuote().subscribe(response => {
      this.quote_of_the_day = response;
      this.quote = this.quote_of_the_day['quote'];
      this.person = this.quote_of_the_day['person'];

      console.log(response);
    })

    this.setGreeting();

    // calls the api every 15 minutes
    setInterval(data=> {
      this.service.getQuote().subscribe(response => {
        this.quote_of_the_day = response;
        this.quote = this.quote_of_the_day['quote'];
        this.person = this.quote_of_the_day['person'];
  
        console.log(response);
      })
  
      this.setGreeting();
    }, 900000);

  }

}
