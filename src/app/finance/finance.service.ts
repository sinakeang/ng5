import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private items = new BehaviorSubject<any>(['My first item', 'My second item']);
  item = this.items.asObservable();

  constructor() { }

  changeItem(item) {
    this.items.next(item);
  }
}