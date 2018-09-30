import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { FinanceService } from './finance.service';
import { Income } from './income';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
  animations: [
    trigger('incomes', [
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
  btnIncomeText: string = 'Add income';
  incomes: Income[] = [];

  constructor(private _data: FinanceService) { }

  ngOnInit() {
    this._data.income.subscribe(res => this.incomes = res);
    this._data.changeIncome(this.incomes);
  }

  addIncome(incomeAmountText,incomeStartDateText) {
    this.incomes.push({amount: incomeAmountText, startDate: incomeStartDateText});
    this._data.changeIncome(this.incomes);
  }

  removeIncome(i) {
    this.incomes.splice(i, 1);
    this._data.changeIncome(this.incomes);
  }
}

