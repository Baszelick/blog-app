import { Component } from '@angular/core';
import {PostService} from '../../services/post.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts: any[] = []

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data as any[]
      console.log(this.posts)
    })
  }
}
