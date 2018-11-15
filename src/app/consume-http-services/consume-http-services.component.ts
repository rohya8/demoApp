import { Component, OnInit } from '@angular/core';
import { PostService } from './post-service.service';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

// const postUrl = 'https://jsonplaceholder.typicode.com/posts';
@Component({
  selector: 'app-consume-http-services',
  templateUrl: './consume-http-services.component.html',
  styleUrls: ['./consume-http-services.component.css']
})
export class ConsumeHttpServicesComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService,
    private http: Http
  ) { }

  ngOnInit() {
    this.getPostData();
  }

  getPostData() {
    this.http.get(environment.postUrl)
      .subscribe(response => {
        this.posts = response.json();
      })
      ;
  }

  addPostData(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.http.post(environment.postUrl, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePostData(post) {
    this.http.patch(environment.postUrl + '/' + post.id, JSON.stringify({ isRead: true })
    ).subscribe(response => {
      console.log(response.json());
    });

    // this.http.post(environment.postUrl, JSON.stringify(post));
  }


  deletePostData(post) {
    this.http.delete(environment.postUrl + '/' + post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });

    // this.http.post(environment.postUrl, JSON.stringify(post));
  }
}
