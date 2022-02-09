import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	//{ path: "products", loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
	{ path: 'galery', loadChildren: () => import('./components/galery/galery.module').then(m => m.GaleryModule) },
	//{ path: '**', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'producto/:id',
		children: [
			{
				path: '',
				loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
			},
		]
		//loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
	},
	{ path: 'user-store/:id', loadChildren: () => import('./components/user-store/user-store.module').then(m => m.UserStoreModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
		HttpClientModule],
		exports: [RouterModule]
	})
	export class AppRoutingModule { }
