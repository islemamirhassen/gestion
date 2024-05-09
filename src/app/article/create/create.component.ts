import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  articleForm: Article = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
 
  constructor(private ArticleService:ArticleService,
    private Router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.ArticleService.create(this.articleForm)
    .subscribe({
      next:(data) => {
        this.Router.navigate(["/article/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

