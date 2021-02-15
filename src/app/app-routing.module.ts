import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent},
  { path: 'login', pathMatch: 'full', component: LoginComponent},
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'customer', loadChildren: './customer/customer.module#CustomerModule', canActivate: [AuthGuard],    }
    ],
  },

];

//console.log(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

constructor(private router: Router) { 
    //console.log('test1');
   
  }
}
