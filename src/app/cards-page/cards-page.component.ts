import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app-service.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {

  incomeCount: number
  outcomeCount: number
  loanCount: number
  investmentCount: number

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.incomeCount = this.AppService.getCountIncome();

    this.outcomeCount = this.AppService.getCountOutcome();

    this.loanCount = this.AppService.getCountLoan();

    this.investmentCount = this.AppService.getCountInvestment();
  }

}
