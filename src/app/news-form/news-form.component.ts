import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from '../services/shared-service';
import { NewsService } from '../services/news-service';
import { Subscription } from 'rxjs';
import { News } from '../models/news.model';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsFormComponent implements OnInit {
  @Input() total: number;
  subscriptions: Subscription[] = [];
  isOpen: boolean;
  newsform: FormGroup;
  formInvalid: boolean;

  constructor(
    private newsService: NewsService,
    private sharedService: SharedService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.subscriptions.push(this.sharedService.cast.subscribe(data => this.isOpen = data));
    this.newsform = this.fb.group({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.newsform.valid) {
      const newId = this.total + 1,
        newTitle = this.newsform.value.title,
        newContent = this.newsform.value.content,
        newStatus = 'New';

      this.subscriptions.push(
        this.newsService.addNews(newId, newTitle, newContent, newStatus)
          .subscribe(res => res, err => console.log(err))
      );
      this.resetForm();
    } else {
      this.formInvalid = true;
    }
  }

  resetForm() {
    this.newsform.reset({
      title: '',
      content: ''
    });
    this.formInvalid = false;
    this.sharedService.changeIsOpen();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
