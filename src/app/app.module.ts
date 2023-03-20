import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './modules/container/container.component';
import { MainContentComponent } from './modules/container/main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
