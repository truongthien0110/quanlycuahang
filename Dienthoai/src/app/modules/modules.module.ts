import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { TrangchuModule } from './trangchu/trangchu.module';
import { modulesRoutes } from './modules.router';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModulesComponent,
    
  ],
  imports: [
    TrangchuModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(modulesRoutes)
  ]
})
export class ModulesModule { }
