import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStoreComponent } from './user-store.component';

const routes: Routes = [{ path: '', component: UserStoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStoreRoutingModule { }
