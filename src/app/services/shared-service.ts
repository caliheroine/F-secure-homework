import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SharedService {

public isOpen = new BehaviorSubject<boolean>(false);
public cast = this.isOpen.asObservable();

constructor() { }

changeIsOpen(){
  this.isOpen.next(!this.isOpen.value);
}

}