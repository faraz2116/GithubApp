import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ------------------ Modules -------------------------------
import { HttpClientModule} from '@angular/common/http'

// ------------------ Components ----------------------------
import { HomePageComponent } from './_pages/home-page/home-page.component';

// ------------------ Services ------------------------------
import { ApiServiceService } from './_services/api-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
