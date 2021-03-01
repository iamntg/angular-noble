import { Component, OnInit } from '@angular/core';
import { DashboardDummyData } from './dashboard-dummy.data';
import { FinancialPerformance, OperatingPerformance, SalesLead, CustomerPerson, CustomerAccount, Properties } from './dashboard.model';
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


  constructor() {
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
  }

}
