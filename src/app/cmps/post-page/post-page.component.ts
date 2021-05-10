import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { map } from 'rxjs/operators'
import { Post } from '../../models/post'

@Component({
  selector: 'post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  id;
  post;

  constructor(route: ActivatedRoute, private service: AppService) {
    route.params.subscribe(res => this.id=res['id']);
  }

  ngOnInit(): void {
    this.service.getPost(this.id).snapshotChanges()
    .pipe(map(c =>({ id: c.payload.id, ...c.payload.data()})))
    .subscribe(res => {
      this.post = res;
    });
  }

}
