import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Article[]>('localhost:3306/newgestion');
  }
  create(payload: Article) {
    return this.http.post<Article>('http://localhost:3000/fruits', payload);
  }
  getById(id: number) {
    return this.http.get<Article>(`http://localhost:3000/fruits/${id}`);
   }
    
   update(payload:Article){
    return this.http.put(`http://localhost:3000/fruits/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Article>(`http://localhost:3000/fruits/${id}`);
 }
}
