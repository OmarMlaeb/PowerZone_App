import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Fee {

  trainer: string,
  customer: string,
  date: string,
  type: string,
  amount: string

}

export interface monthlyFee {

  year: string,
  month: string,
  total: number

}

@Injectable({
  providedIn: 'root'
})

export class FeesService {

  private url = "http://localhost/PowerZone_Server/"

  constructor(private http: HttpClient) { 

  }

  id = "0";

  addFees(fee: Fee) {
    console.log(fee);
    return this.http.post(this.url + "fees.php", JSON.stringify(fee));
  }

  getFees() {
    return this.http.get<[Fee]>(this.url + "getFees.php?trainerID=" + this.id);
  }

  getMonthlyFees() {
    return this.http.get<[monthlyFee]>(this.url + "getMonthlyFees.php?trainerID=" + this.id)
  }

}
