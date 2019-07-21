import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  subscription: Subscription;
  isOpen: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.subscription = this.sharedService.cast.subscribe(data => this.isOpen = data);
  }

  openNewsForm() {
    this.sharedService.changeIsOpen();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
