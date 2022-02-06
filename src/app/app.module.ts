import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaincompComponent } from './components/maincomp/maincomp.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { GifContComponent } from './components/gif-cont/gif-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincompComponent,
    TopbarComponent,
    GifContComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
