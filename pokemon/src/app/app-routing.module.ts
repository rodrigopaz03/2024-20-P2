import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer/trainer-detail/trainer-detail.component';

const routes: Routes = [
  { path: 'trainers', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) },
  { path: '', redirectTo: '/trainers', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
