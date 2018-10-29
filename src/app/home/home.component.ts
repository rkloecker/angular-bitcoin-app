import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  showCurr() {
    this.router.navigate(["show-curr"]);
  }
  ngOnInit() {
   
  }

}
