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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

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
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
