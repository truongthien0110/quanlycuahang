import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { ChitietspComponent } from './chitietsp/chitietsp.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ChitiettintucComponent } from './chitiettintuc/chitiettintuc.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    IndexComponent,
    ChitietspComponent,
    TintucComponent,
    ChitiettintucComponent,
    DanhmucComponent,
    
 
  
    
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,NgxPaginationModule,Ng2SearchPipeModule,
    RouterModule.forChild([
      { path: 'index', component: IndexComponent },
      { path: 'chitiet/:id', component: ChitietspComponent },
      { path: 'tintuc', component: TintucComponent },
      { path: 'chitiettintuc/:id', component: ChitiettintucComponent },
      { path: 'danhmuc/:id', component: DanhmucComponent },
      
      

      
    ]),
    CommonModule
  ]
})
export class TrangchuModule { }
