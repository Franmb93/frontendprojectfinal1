import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductEditComponent } from './modules/product-edit/product-edit.component';
import { UserEditComponent } from './modules/user-edit/user-edit.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule) },

	{ path: '', loadChildren: () => import('./modules/product-edit/product-edit.module').then(m => m.ProductEditModule) },
	{ path: '', loadChildren: () => import('./modules/user-edit/user-edit.module').then(m => m.UserEditModule) },

	{ path: 'producto', loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule) },

	//TODO: delete productedit path
	{ path: 'productedit', loadChildren: () => import('./modules/product-edit/product-edit.module').then(m => m.ProductEditModule) },
  { path: 'login', component: LoginComponent },

	{ path: 'home', component: HomeComponent },
	//{ path: "products", loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
	//{ path: '**', redirectTo: 'home', pathMatch: 'full' },
	// {
	// 	path: 'producto/:id',
	// 	children: [
	// 		{
	// 			path: '',
	// 			loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
	// 		},
	// 	]
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
		HttpClientModule],
		exports: [RouterModule]
	})
	export class AppRoutingModule { }
