import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map } from 'rxjs/operators'
import { Post } from '../../models/post'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postList = [];
  selectedPostList: Post[];
  latestPosts: Post[];

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
      this.postList = [res[5], res[1], res[2]];
      this.selectedPostList = this.postList
      this.latestPosts = this.postList.filter((post, index) => index < 3)
    });
  }

  filterPostList(e) {
    if (e) {
      this.selectedPostList = this.postList.filter(post => {
        return post.tags.find(tag => tag === e)
      })
    } else {
      this.selectedPostList = this.postList;
    }
  }

}
