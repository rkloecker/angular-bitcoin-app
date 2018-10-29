import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Routes, RouterModule, Router } from "@angular/router";
import { CurrencyService } from './../currency.service';
import {Observable} from "rxjs/Observable";
import { Currency } from '../currency';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  currname = '';
 
  searchlimit=25;
         
  @ViewChild('form') form: FormGroup;
  currencies$: Observable<[Currency]>;

  constructor(private cs: CurrencyService) {
  }

  ngOnInit() {
    
  }
         
  submit(value) {
    // console.log(value.currname);
    console.log(value);
    this.currencies$ = this.cs.getLimitedCurrencyData(value);
  }

}
