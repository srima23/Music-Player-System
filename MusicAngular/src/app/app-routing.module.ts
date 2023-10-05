import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { ArtistSongsComponent } from './artist-songs/artist-songs.component';

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
      { path: 'home', component: HomeComponent }
      // { path: 'restock', component: RestockComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'checkout', component: CheckoutComponent }, // Add this route
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artist-songs/:name', component: ArtistSongsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
