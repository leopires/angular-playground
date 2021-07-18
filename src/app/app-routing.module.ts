import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lists',
    loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule)
  },
  {
    path: '',
    redirectTo: '/lists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
