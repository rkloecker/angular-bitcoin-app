import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { ShowCurrComponent } from './show-curr/show-curr.component';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CurrListComponent } from './curr-list/curr-list.component';
import { CurrDetailComponent } from './curr-detail/curr-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    ShowCurrComponent,
    HomeComponent,
    CurrListComponent,
    CurrDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
