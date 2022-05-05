import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('@pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('@pages/course/course.module').then(m => m.CourseModule),
  },
  {
    path: 'about',
    loadChildren: () => import('@pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'search-lessons',
    loadChildren: () => import('@pages/search/search.module').then(m => m.SearchModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
