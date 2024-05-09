import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allArticle: Article[] = [];
  ArticleService: any;
  idTodelete!: number;
  deleteModal: any;

 
  constructor(private fruitService: ArticleService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.ArticleService.get().subscribe((data: Article[]) => {
      this.allArticle = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.ArticleService.delete(this.idTodelete).subscribe({
      next: (data: any) => {
        this.allArticle = this.allArticle.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
