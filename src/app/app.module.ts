import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { GroupForm } from '../pages/group-form/group-form';
import { ElementsForm } from '../pages/elements-form/elements-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { ElementServiceProvider } from '../providers/element-service/element-service';

@NgModule({
  declarations: [
    MyApp,
    GroupForm,
    ElementsForm
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
    ElementsForm
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
