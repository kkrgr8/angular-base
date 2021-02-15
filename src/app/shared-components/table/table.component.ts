import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  data: any;

  @Output() tableEvent: EventEmitter<any> = new EventEmitter<any>();
  
  tableData: any[];

  dataSource:any;
  displayedColumns:any;
  actionColumn:any;
  actions:boolean = false;
  itemPerPage:any[] = [5,10,20];
  buttons:boolean = false;
  pagination:boolean = false;
  filters:boolean = false;
  button_list : any[];
  action_selected : string = '';
  action_list : any =   { 
    checkbox: true
  };
  data_count:any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild('input',null) input: ElementRef;

  ngOnChanges(): void 
  {
    this.initTableData();
  }
  ngOnInit() {
    if(this.data != undefined){
      this.initTableData();
    }    
  }

  initTableData(): void {
    if(this.data != undefined){
      this.tableData = this.data.table_list;
      this.data_count = this.tableData.length;
      this.displayedColumns= this.data.labels;
      if(this.data.checkbox == true && this.displayedColumns.indexOf("checkbox") == -1){
        this.displayedColumns.unshift("checkbox");
        this.data.displayName.unshift('checkbox');  
      }
      console.log(this.data.displayName);
      // if(this.data.actions && this.displayedColumns.indexOf("Action") == -1){
      //     this.actions = true;
      //     this.displayedColumns.push('Action');
      //     this.data.displayName.push('Action');       
      // }  
      if(this.data.action_list){
        this.action_list = this.data.action_list;
       
      };
      if(this.data.buttons == true){
        this.buttons = true;
        this.button_list = this.data.button_list;
      }else{
        this.buttons = false;
      }
      if(this.data.filters == true){
        this.filters = true;
      }  
      this.dataSource = new MatTableDataSource<any>(this.tableData);
      if(this.data.pagination == true){
        this.pagination = true;  
        this.dataSource.paginator = this.paginator;    
      }       
      this.actionColumn = this.data.actions;
      if(this.data.itemPerPage){
        this.itemPerPage = this.data.itemPerPage;
      }
      this.dataSource.sort = this.sort;
    }
  }

  formatHeader(title){ 
    return this.data.displayName[this.data.labels.indexOf(title)];
  }
  selectCheckBox(element,checked){
    element.checkbox = checked;  
    console.log(checked);  
    let val = {
      methodToCall: 'checked', 
      value : element,
      checked : checked
    }
    this.tableEvent.emit(val);
  }
}


