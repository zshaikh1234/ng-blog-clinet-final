import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Article } from "./article";
import { ARTICLES } from "./mock-articles";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor() {}
  
  getArticle(key: string): Observable<Article> {
    const articles: Article[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
  }

  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES; //ARTICLES is  a MOCK data
    return of(articles);
  }


}
