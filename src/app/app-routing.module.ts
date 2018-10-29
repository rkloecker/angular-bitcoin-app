import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { SearchComponent} from './search/search.component';
import { ShowCurrComponent} from './show-curr/show-curr.component';
import { CurrListComponent} from './curr-list/curr-list.component';
import { CurrDetailComponent} from './curr-detail/curr-detail.component';



const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "show-curr", component: ShowCurrComponent },
  { path: "curr-list", component: CurrListComponent },
  { path: "curr-detail/:id", component: CurrDetailComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
