import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChildComponent } from '../shared-components/child/child.component';
import { TableComponent } from '../shared-components/table/table.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MaterialModule,
      // MDBBootstrapModule.forRoot(),
      // NgbModule
    ],
    declarations: [ 
      ChildComponent,
      TableComponent
    ],
    providers: [DatePipe],
    exports: [
      FormsModule,
      ReactiveFormsModule,
      ChildComponent,
      TableComponent,
    ]
    

 })
 export class SharedModule { }
