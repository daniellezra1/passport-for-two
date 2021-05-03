import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPost(id) {
    this.router.navigate([`/post/${id}`])
  }

}
