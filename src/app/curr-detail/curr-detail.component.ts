import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CurrencyService } from './../currency.service';
import {Observable} from "rxjs/Observable";
import { Currency } from '../currency';

@Component({
  selector: 'app-curr-detail',
  templateUrl: './curr-detail.component.html',
  styleUrls: ['./curr-detail.component.css']
})
export class CurrDetailComponent implements OnInit {

  currencies$: Observable<[Currency]>;
  theId;
  
  constructor(private cs: CurrencyService, private router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.theId = this._route.snapshot.paramMap.get('id');
    this.currencies$ = this.cs.getCurrency(this.theId)
  }


}
