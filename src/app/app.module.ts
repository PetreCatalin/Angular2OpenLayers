import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { MapComponent } from './components/map/map.component';
import { BannerComponentI } from './components/banner/banner-inline.component';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TwainComponent } from './components/twain/twain.component';
import { routing } from './app.routing';

import { UserService }  from './model/user.service';
import { TwainService }  from './components/twain/twain.service';

@NgModule({
  imports:      [ BrowserModule , routing ],
  declarations: [ AppComponent ,
                  NavbarComponent,
                  JumbotronComponent,
                  HomeComponent,
                  AboutComponent,
                  MapComponent ,
                  BannerComponentI,
                  BannerComponent,
                  WelcomeComponent,
                  TwainComponent],
  providers: [UserService,TwainService],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
