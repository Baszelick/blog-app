import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl)
  }

  getPostById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
