import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
  url = 'https://api.coinmarketcap.com/v1/ticker/';
  getCurrencies() {
    return this.http
    .get<[Currency]>(`${this.url}`);
}
getCurrency(curr) {
  return this.http
  .get<[Currency]>(`${this.url}${curr}/`);
}
test() {
  return this.http
  .get<[Currency]>(`${this.url}/bitcoin/`);
}
//'?limit=' + searchLimit
getLimitedCurrencyData(limit) {
  // console.log(`${this.url}?limit=${limit}`)
  return this.http
  .get<[Currency]>(`${this.url}?limit=${limit}`);
}
}


