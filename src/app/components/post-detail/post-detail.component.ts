import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostService} from '../../services/post.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {
  post: any

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}


  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.postService.getPostById(id).subscribe(data => {
      this.post = data;
    })
  }

}
