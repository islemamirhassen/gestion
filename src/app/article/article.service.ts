import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable()

export class ArticleService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Article[]>('localhost:8080/article');
  }
  create(payload: Article) {
    return this.http.post<Article>('http://localhost:8080/article', payload);
  }
  getById(id: number) {
    return this.http.get<Article>(`http://localhost:8080/article/${id}`);
   }
    
   update(payload:Article){
    return this.http.put(`http://localhost:8080/article/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Article>(`http://localhost:8080/article/${id}`);
 }
}
