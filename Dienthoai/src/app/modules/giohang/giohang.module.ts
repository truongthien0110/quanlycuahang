import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoadonComponent } from './hoadon/hoadon.component';
import { RouterModule } from '@angular/router';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HoadonComponent,
    ThanhtoanComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'hoadon', component: HoadonComponent },
      { path: 'thanhtoan', component: ThanhtoanComponent },
      
      
    ]),
    CommonModule
  ]
})
export class GiohangModule { }
