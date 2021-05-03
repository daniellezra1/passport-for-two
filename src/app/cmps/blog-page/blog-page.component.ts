import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  selectedPostList;
  postList = [
    {
      id: 1,
      title: 'Must Visit Beaches',
      content: [
        {
          title: null,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed a elementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris. Phasellus volutpat mauris ac sem tincidunt,…  ',
          images: []
        }
      ],
      date: new Date(),
      tags: ['usa', 'america', 'neture'],
      mainImg: '../../../assets/pic/main/main.jpg',
    },
    {
      id: 2,
      title: 'Must Visit Beaches',
      content: [
        {
          title: null,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed a elementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris. Phasellus volutpat mauris ac sem tincidunt,…  ',
          images: [
            {url: '', title: ''}
          ]
        }
      ],
      date: new Date(),
      tags: ['usa', 'america', 'neture'],
      mainImg: '../../../assets/pic/main/main.jpg',

    },
    {
      id: 3,
      title: 'Must Visit Beaches',
      content: [
        {
          title: null,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed a elementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris. Phasellus volutpat mauris ac sem tincidunt,…  ',
          images: []
        }
      ],
      date: new Date(),
      tags: ['usa', 'america', 'neture'],
      mainImg: '../../../assets/pic/main/main.jpg',

    },
    {
      id: 1,
      title: 'Must Visit Beaches',
      content: [
        {
          title: null,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed a elementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris. Phasellus volutpat mauris ac sem tincidunt,…  ',
          images: []
        }
      ],
      date: new Date(),
      tags: ['usa', 'america', 'neture'],
      mainImg: '../../../assets/pic/main/main.jpg',
    },
    {
      id: 2,
      title: 'Must Visit Beaches',
      content: [
        {
          title: null,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed a elementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris. Phasellus volutpat mauris ac sem tincidunt,…  ',
          images: [
            {url: '', title: ''}
          ]
        }
      ],
      date: new Date(),
      tags: ['usa', 'america', 'neture'],
      mainImg: '../../../assets/pic/main/main.jpg',

    },
    {
      id: 3,
      title: 'Must Visit Beaches',
      content: [
        {
          title: null,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed a elementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris. Phasellus volutpat mauris ac sem tincidunt,…  ',
          images: []
        }
      ],
      date: new Date(),
      tags: ['usa', 'america', 'neture'],
      mainImg: '../../../assets/pic/main/main.jpg',

    }

  ]

  constructor() { }

  ngOnInit(): void {
    this.selectedPostList = this.postList
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
