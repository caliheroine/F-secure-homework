import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { News } from '../models/news.model';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

    url = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<News>(this.url);
  }

  addNews(id: number, title: string, content: string, status: string): Observable<any> {
    const body = {id, title, content, status};
    return this.http.post<News>(this.url, body);
  }

  deleteNews (id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete<News>(url);
  }

}