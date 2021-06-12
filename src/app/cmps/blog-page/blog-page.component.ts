import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map } from 'rxjs/operators'
import { Post } from '../../models/post'

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  postList = [];
  selectedPostList: Post[];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getPosts().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(res => {
      this.postList = [res[8], res[7], res[5], res[1], res[2]];
      this.selectedPostList = this.postList
    });
  }

  filterPostList(e) {
    if (e) {
      this.selectedPostList = this.postList.filter(post => {
        return post.tags?.find(tag => tag === e)
      })
    } else {
      this.selectedPostList = this.postList;
    }
  }

}
