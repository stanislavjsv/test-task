import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { dataUserInteface } from 'src/app/inerfaces/user-data';

import { AppService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-tab',
  templateUrl: './table.component.html',
  styleUrls: ['../list-page.component.scss']
})
export class TableComponent implements OnInit {

  currentArr: Array<dataUserInteface> = [];
  
  constructor( 
    private AppService: AppService,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void { 
    this.route.queryParams.subscribe( ( params: Params) => {
      if(+params['tab'] == 0){
        this.currentArr = [];
        this.AppService.getArrAll(this.currentArr)
      }else if(+params['tab'] == 1){
        this.currentArr = [];
        this.AppService.getArrIncome(this.currentArr)
      }else if(+params['tab'] == 2){
        this.currentArr = [];
        this.AppService.getArrOutcome(this.currentArr) 
      }else if(+params['tab'] == 3){
        this.currentArr = [];
        this.AppService.getArrLoan(this.currentArr);
      }else if(+params['tab'] == 4){
        this.currentArr = [];
        this.AppService.getArrInvestment(this.currentArr);
      }
    })
  }

}
