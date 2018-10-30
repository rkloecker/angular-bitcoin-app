import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CurrencyService } from './../currency.service';
import { Observable } from "rxjs/Observable";
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
    this.currencies$ = this.cs.getLimitedCurrencyData(value);
  }

}
