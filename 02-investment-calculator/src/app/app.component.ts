import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type InvestmentInput } from './investment-input.model';
import { type AnnualData } from './annual-data.mode';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  annualData?: AnnualData[];

  onInputSubmit(investmentInput: InvestmentInput) {
    this.annualData = this.calculateInvestmentResults(investmentInput);
  }

  private calculateInvestmentResults(investmentInput: InvestmentInput) {
    const annualData: AnnualData[] = [];
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      investmentInput;

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData);
    return annualData;
  }
}
