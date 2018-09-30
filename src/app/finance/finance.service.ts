import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Income } from "./income";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private incomeData: Income = { amount: "$1000", startDate: "Sep27"};
  private incomes = new BehaviorSubject<any>([this.incomeData]);
  income = this.incomes.asObservable();

  constructor() { }

  changeIncome(income) {
    this.incomes.next(income);
  }
}