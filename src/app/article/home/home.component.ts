import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allArticle: Article[] = [];
  ArticleService: any;
  idTodelete!: number;
  deleteModal: any;

 
  constructor(private articleService: ArticleService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.articleService.get().subscribe((data: Article[]) => {console.log(data);
      this.allArticle = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.articleService.delete(this.idTodelete).subscribe({
      next: (data: any) => {
        this.allArticle = this.allArticle.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
