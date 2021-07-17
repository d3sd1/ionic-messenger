import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { GamesPage } from '../pages/games/games';
import { BusinessPage } from '../pages/business/business';
import { GroupPopoverPage } from '../pages/group-popover/group-popover';
import { ReactionsPopoverPage } from '../pages/reactions-popover/reactions-popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    GamesPage,
    BusinessPage,
    TabsPage,
    GroupPopoverPage,
    ReactionsPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    GamesPage,
    BusinessPage,
    TabsPage,
    GroupPopoverPage,
    ReactionsPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
