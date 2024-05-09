import { Article } from './../article';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  ArticleForm: Article = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
  ArticleService: any;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private fruitService: ArticleService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.fruitService.getById(id).subscribe((data) => {
      this.ArticleForm = data;
    });
  }
 
  update() {
    this.ArticleService.update(this.ArticleForm)
    .subscribe({
      next:(data: any) => {
        this.router.navigate(["/article/home"]);
      },
      error:(err: any) => {
        console.log(err);
      }
    })
  }
}
