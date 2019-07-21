import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NewsService } from '../services/news-service';
import { News } from '../models/news.model';
import { Subscription, Observable } from 'rxjs';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsTableComponent implements OnInit {
  @Input() news: News[];
  subscription: Subscription;
  cols: any;
  allSelectedNews: News[];
  selectedNewsId: number;

  constructor(private confirmationService: ConfirmationService,
    private newsService: NewsService) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'content', header: 'Content' },
      { field: 'status', header: 'Status' }
    ];
  }

  selectNews(data) {
    this.selectedNewsId = data.id;
    this.confirm();
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this news?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subscription = this.newsService.deleteNews(this.selectedNewsId)
          .subscribe(res => res, err => console.log(err));
      },
      reject: () => {
        this.selectedNewsId = null;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
