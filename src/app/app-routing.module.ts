import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: "products", component: ProductComponent },
  { path: 'galery', loadChildren: () => import('./components/galery/galery.module').then(m => m.GaleryModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
