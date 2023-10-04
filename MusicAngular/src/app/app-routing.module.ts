import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
    ],
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      // { path: 'cycles', component: CyclesComponent },
      // { path: 'restock', component: RestockComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'checkout', component: CheckoutComponent }, // Add this route
    ],
  },
  { path: '', redirectTo: '/cycles', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
