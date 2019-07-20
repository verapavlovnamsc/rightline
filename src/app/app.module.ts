import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconTextComponent } from './icon-text/icon-text.component';
import { UpHeaderComponent } from './up-header/up-header.component';
import { IconTextDataService } from './icon-text-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IconTextComponent,
    UpHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [IconTextDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
