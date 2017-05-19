import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { GroupForm } from '../pages/group-form/group-form';
import { GroupsList } from '../pages/groups-list/groups-list';
import { ElementsForm } from '../pages/elements-form/elements-form';
import { ElementsList } from '../pages/elements-list/elements-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { ElementServiceProvider } from '../providers/element-service/element-service';

@NgModule({
  declarations: [
    MyApp,
    GroupForm,
    ElementsForm,
    ElementsList,
    GroupsList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GroupForm,
    ElementsForm,
    ElementsList,
    GroupsList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GroupServiceProvider,
    ElementServiceProvider,
  ]
})
export class AppModule {}
