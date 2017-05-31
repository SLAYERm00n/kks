import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Seiten
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Payselectscreen  } from '../pages/payselectscreen/payselectscreen';
import { Sumscreen  } from '../pages/sumscreen/sumscreen';
import {Goodbyescreen} from '../pages/goodbyescreen/goodbyescreen';
import { SumscreenModule  } from '../pages/sumscreen/sumscreen.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Payselectscreen,
    Sumscreen,
    Goodbyescreen
  ],
  imports: [
   BrowserModule,
   IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Sumscreen,
    Payselectscreen,
    Goodbyescreen
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
