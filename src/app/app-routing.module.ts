import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule) },
	{ path: 'producto', loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule) },



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
