import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeahterIconModule } from 'src/app/utils/feather-icon/feather-icon.module';

// Ng-select
import { NgSelectModule } from '@ng-select/ng-select';

import { HttpClientService } from './../../../services/_httpclient.service';
import { DashboardService } from './../../../services/dashboard.service';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeahterIconModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [
    DashboardService,
    HttpClientService,
  ]
})
export class DashboardModule { }
