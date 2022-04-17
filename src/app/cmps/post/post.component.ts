import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post;
  @Input() isBlogPage: boolean = false;

  constructor(private router: Router) {}

  goToPost(id) {
    this.router.navigate([`/post/${id}`]);
  }
}
