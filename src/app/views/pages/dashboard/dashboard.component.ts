import { DashboardService } from './../../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { DashboardDummyData } from '../../../mock-data/dashboard-mock.data';
import {
  FinancialPerformance,
  OperatingPerformance,
  SalesLead,
  CustomerPerson,
  CustomerAccount,
  Properties,
} from '../../../models/dashboard.model';
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
  customerList: CustomerPerson[];
  customerAccountList: CustomerAccount[];
  propertiesList: Properties[];

  searchCustomerPerson: string = null;
  searchCustomerAccount: string = null;
  searchProperty: string = null;


  constructor(private _dashboardService: DashboardService) {
    // financial performance list mock data
    this.financialPerformanceList = DashboardDummyData.financialPerformanceList;

    // operating performance list mock data
    this.operatingPerformanceList = DashboardDummyData.operatingPerformanceList;

    // sales lead list mock data
    this.salesLeadList = DashboardDummyData.salesLeadList;

    this.customerList = DashboardDummyData.customerList;
    this.customerAccountList = DashboardDummyData.customerAccounts;
    this.propertiesList = DashboardDummyData.properties;

  }

  ngOnInit(): void {
    this._dashboardService.getCustomers().subscribe(result => {
      console.log(result);
      // do format result and map as needed.
    })
  }

}
