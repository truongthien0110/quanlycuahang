import { IndexComponent } from './trangchu/index/index.component';
import { ModulesComponent } from './modules.component';
import { Routes } from '@angular/router';
export const modulesRoutes: Routes = [
  {
    path: '', component: ModulesComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'trangchu', loadChildren: () => import('./trangchu/trangchu.module').then(m => m.TrangchuModule)},
    //   { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
    ]
  }
];