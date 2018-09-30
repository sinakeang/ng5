import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { FinanceService } from './finance.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
  animations: [
    trigger('items', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),  
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
          style({opacity: 1, transform: 'translateY(0)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
          style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
        ]))]), {optional: true})
      ])
    ])
  ]
})
export class FinanceComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  itemText: string;
  items = [];

  constructor(private _data: FinanceService) { }

  ngOnInit() {
    this._data.item.subscribe(res => this.items = res);
    this._data.changeItem(this.items);
  }

  addItem() {
    this.items.push(this.itemText);
    this.itemText = '';
    this._data.changeItem(this.items);
  }

  removeItem(i) {
    this.items.splice(i, 1);
    this._data.changeItem(this.items);
  }
}
