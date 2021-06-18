import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Currency } from "./currency";
import { take } from "rxjs-compat/operator/take";
import { filter, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  getCurrencies() {
    return this.http.get<Currency[]>(`${this.url}`);
  }
  getLimitedCurrencyData(limit) {
    return this.http
      .get<Currency[]>(`${this.url}`)
      .pipe(map((data) => data.slice(0, limit)));
  }
}
