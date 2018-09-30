import { NgModule } from "@angular/core";
import { FinanceComponent } from "./finance.component";
import { FormsModule } from "@angular/forms";
import { FinanceService } from "./finance.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [FinanceComponent],
  imports: [
    CommonModule, 
    FormsModule //for ngModel
  ],
  exports: [FinanceComponent],
  providers: [FinanceService]
})
export class FinanceModule { }