import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './cmps/about/about.component';
import { BlogPageComponent } from './cmps/blog-page/blog-page.component';
import { ContactPageComponent } from './cmps/contact-page/contact-page.component';
import { HomeComponent } from './cmps/home/home.component';
import { PostPageComponent } from './cmps/post-page/post-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'about', component: AboutComponent, pathMatch: 'full' },
  {path: 'blog', component: BlogPageComponent, pathMatch: 'full' },
  {path: 'contact', component: ContactPageComponent, pathMatch: 'full' },
  {path: 'post/:id', component: PostPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
