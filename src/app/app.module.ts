import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NewsTableComponent } from './news-table/news-table.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { NewsService } from './services/news-service';
import { SharedService } from './services/shared-service';


@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    NewsTableComponent,
    NewsFormComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule
  ],
  providers: [
    HttpClientModule,
    NewsService,
    SharedService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
