import { Component, OnInit } from '@angular/core';
import { FinancialPerformance, OperatingPerformance, SalesLead } from './dashboard.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  financialPerformanceList: FinancialPerformance[];
  operatingPerformanceList: OperatingPerformance[];
  salesLeadList: SalesLead[];


  constructor() {
    // financial performance list mock data
    this.financialPerformanceList = [
      {
        id: 101,
        period: 'Dec 2020',
        collected: 372275,
        outstanding: 0,
        projected: 0,
      },
      {
        id: 102,
        period: 'Jan 2021',
        collected: 186512,
        outstanding: 0,
        projected: 0,
      },
      {
        id: 103,
        period: 'Feb 2021',
        collected: -749600,
        outstanding: 0,
        projected: 0,
      },
    ];

    // operating performance list mock data
    this.operatingPerformanceList = [
      {
        id: 101,
        location: 'New York',
        occupied: 0,
        vaccated: 0,
        rentRoll: 0,
        potential: 32000,
      },
      {
        id: 102,
        location: 'Chicago',
        occupied: 0,
        vaccated: 0,
        rentRoll: 0,
        potential: 23774,
      },
      {
        id: 102,
        location: 'Detroit',
        occupied: 0,
        vaccated: 0,
        rentRoll: 0,
        potential: 24983,
      }
    ];

    // sales lead list mock data
    this.salesLeadList = [
      {
        id: 101,
        name: 'Robert Samuelson',
        email: 'robert@outlook.com',
      },
      {
        id: 102,
        name: 'Robbie McSamuelson',
        email: 'RM123@earthlink.net',
      },
      {
        id: 103,
        name: 'Bob MacSammold',
        email: 'bob@macsammold.com',
      },
      {
        id: 104,
        name: 'Bobby Sammole',
        email: 'bsammole@hotmail.com',
      },
      {
        id: 105,
        name: 'Melodie Knipp',
        email: 'mknipp@gmail.com',
      },
      {
        id: 106,
        name: 'Candida Corbley',
        email: 'candida_corbley@hotmail.com',
      },
      {
        id: 107,
        name: 'Karan Karpin',
        email: 'karan_karpin@gmail.com',
      },
      {
        id: 108,
        name: 'Andra Scheyer',
        email: 'andra@gmail.com',
      },
    ]
    
  }

  ngOnInit(): void {
  }

}
