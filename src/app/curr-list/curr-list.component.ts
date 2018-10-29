import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import { CurrencyService } from './../currency.service';
import {Observable} from "rxjs/Observable";
import { Currency } from '../currency';

@Component({
  selector: 'app-curr-list',
  templateUrl: './curr-list.component.html',
  styleUrls: ['./curr-list.component.css']
})
export class CurrListComponent implements OnInit {

  currencies$: Observable<[Currency]>; 
  
  constructor(private cs: CurrencyService, private router: Router) {
  }

  ngOnInit() {
    this.currencies$ = this.cs.getCurrencies()
  }

  showCurrDetail() {
    this.router.navigate(["curr-detail"]);
  }

}

