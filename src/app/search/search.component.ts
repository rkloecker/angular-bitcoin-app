import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CurrencyService } from "./../currency.service";
import { Observable } from "rxjs/Observable";
import { Currency } from "../currency";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  currencies: Currency[];
  currencies_total: Currency[];
  searchlimit = 25;
  c;

  @ViewChild("form") form: FormGroup;
  currencies$: Observable<[Currency]>;

  constructor(private cs: CurrencyService) {}

  ngOnInit() {
    this.c = this.cs.getCurrencies().subscribe((data) => {
      this.currencies_total = data;
      this.currencies = data;
      // console.log(this.currencies);
      // console.log("oninit");
    });
  }

  limit() {
    // console.log("limit");
    this.currencies = this.currencies_total.slice(0, this.searchlimit);
    // console.log(this.searchlimit);
  }

  ngOnDestroy() {
    console.log("unsub");
    this.c.unsubscribe();
  }
}
