import { ArticleService } from './article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    ArticleRoutingModule,
    FormsModule
  ],
  providers:[ArticleService]
})
export class ArticleModule { }
