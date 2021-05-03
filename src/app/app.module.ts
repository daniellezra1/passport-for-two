import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component';
import { HomeComponent } from './cmps/home/home.component';
import { AboutComponent } from './cmps/about/about.component';
import { ContactComponent } from './cmps/contact/contact.component';
import { PostListComponent } from './cmps/post-list/post-list.component';
import { PostComponent } from './cmps/post/post.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { InfoListComponent } from './cmps/info-list/info-list.component';
import { BlogPageComponent } from './cmps/blog-page/blog-page.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostPageComponent } from './cmps/post-page/post-page.component';
import { ContactPageComponent } from './cmps/contact-page/contact-page.component';

// const firebaseConfig = {
//   apiKey: "AIzaSyDsePBEJE_1mg-MKxTGHPA6Yv-DS6iXdck",
//   authDomain: "passport-for-two.firebaseapp.com",
//   projectId: "passport-for-two",
//   storageBucket: "passport-for-two.appspot.com",
//   messagingSenderId: "676540017401",
//   appId: "1:676540017401:web:88365ae570c7e406721028",
//   measurementId: "G-8PGBSRB1ET"
// };

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostListComponent,
    PostComponent,
    FilterComponent,
    InfoListComponent,
    BlogPageComponent,
    PostPageComponent,
    ContactPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
