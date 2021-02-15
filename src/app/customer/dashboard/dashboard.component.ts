import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public tableData : any
  public modalRef: BsModalRef;
  @ViewChild('modaltemplate',{static: false}) modaltemplate;

  constructor(public modalService: BsModalService) { }

  ngOnInit() {
    let data =  [
      {checkbox: false,position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {checkbox: true,position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {checkbox: false,position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {checkbox: false,position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {checkbox: false,position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {checkbox: false,position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {checkbox: false,position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {checkbox: false,position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {checkbox: false,position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {checkbox: false,position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {checkbox: false,position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {checkbox: false,position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {checkbox: false,position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {checkbox: false,position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {checkbox: false,position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {checkbox: false,position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {checkbox: false,position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {checkbox: false,position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {checkbox: false,position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {checkbox: false,position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ];
    this.initTableData(data);
  }
  openModel() {
    this.modalRef = this.modalService.show(this.modaltemplate,{backdrop : 'static'});
  } 
  closeModel(){
    this.modalRef.hide();
  }
  initTableData(data){
    this.tableData = {
      labels: ['checkbox','position', 'name', 'weight', 'symbol'],
      displayName: ['checkbox','position', 'name', 'weight', 'symbol'],
      table_list: data,
      checkbox: true,
      actions: false,
      action_list : {},
      buttons: false,
      filters: true,
      pagination: true,
      itemPerPage : [10,20],
    };   
  }
  parentFunction(event){
    console.log(event);
  }

}
