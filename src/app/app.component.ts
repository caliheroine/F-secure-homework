import { Component } from '@angular/core';
import { NewsService } from './services/news-service';
import { Subscription } from 'rxjs';
import { News } from './models/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'f-secure';
  subscription: Subscription;
  news: News[];
  total: number;
  completed: number;
  notCompleted: number;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.subscription = this.newsService.getNews().subscribe(data => {
      this.news = data;
      this.total = data.length;
      this.completed = data.filter(d => d.status === 'Completed').length;
      this.notCompleted = data.filter(d => d.status === 'Not completed').length;
    },
      err => console.log(err));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
