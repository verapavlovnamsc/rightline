import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconTextComponent } from './icon-text/icon-text.component';
import { UpHeaderComponent } from './up-header/up-header.component';
import { IconTextDataService } from './icon-text-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { StekComponent } from './stek/stek.component';
import { FooterComponent } from './footer/footer.component';
import { FirstIconsComponent } from './first-icons/first-icons.component';
import { SecondIconsComponent } from './second-icons/second-icons.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { ResheniaPageComponent } from './reshenia-page/reshenia-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IconTextComponent,
    UpHeaderComponent,
    SliderComponent,
    AboutcompanyComponent,
    StekComponent,
    FooterComponent,
    FirstIconsComponent,
    SecondIconsComponent,
    MainPageComponent,
    ResheniaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:MainPageComponent, pathMatch:'full' }, 
      {path:'resheniaPage', component:ResheniaPageComponent}
    ])
  ],
  providers: [IconTextDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
