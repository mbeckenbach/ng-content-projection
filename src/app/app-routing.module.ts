import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    data: { label: 'Home' },
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'page-one',
    data: { label: 'Page One' },
    loadChildren: () => import('./features/page-one/page-one.module').then(m => m.PageOneModule)
  },
  {
    path: 'page-two',
    data: { label: 'Page Two' },
    loadChildren: () => import('./features/page-two/page-two.module').then(m => m.PageTwoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
