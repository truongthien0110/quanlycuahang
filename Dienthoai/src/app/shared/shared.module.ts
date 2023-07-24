import { NgModule, Component, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { modulesRoutes } from '../modules/modules.router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(modulesRoutes),
    Ng2SearchPipeModule,
    FormsModule
    
  ]
})
export class SharedModule { }
