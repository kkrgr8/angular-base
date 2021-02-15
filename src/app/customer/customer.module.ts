import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../core/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Menu2Component } from './menu2/menu2.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    Menu2Component,
  ]
})
export class CustomerModule { }
