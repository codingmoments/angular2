import { Injectable, signal } from '@angular/core';
import { type InvestmentInput } from './investment-input.model';
import { type AnnualData } from './annual-data.mode';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  annualData = signal<AnnualData[] | undefined>(undefined);

  public calculateInvestmentResults(investmentInput: InvestmentInput) {
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

    this.annualData.set(annualData);
  }
}
