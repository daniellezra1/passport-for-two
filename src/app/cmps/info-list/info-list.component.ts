import { Component, Input } from '@angular/core';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent {
  @Input() postList = [];

  faInstagramSquare = faInstagramSquare;

  constructor(private router: Router) { }

  open(url) {
    window.open(url);
  }  

  goToAboutPage() {
    this.router.navigate([`/about`])
  }

  goToPost(id) {
    this.router.navigate([`/post/${id}`])
  }
}
