import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [

  { path: '', redirectTo: 'login',pathMatch: 'full' },
  {
    path: 'home/:id',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'menu', component: MenuComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
