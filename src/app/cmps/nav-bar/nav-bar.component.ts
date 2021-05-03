import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscriber } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  subscriptions = new Subscriber();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.add(this.router.events.subscribe(res => {
      this.isMenuOpen = false;
    }));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
