import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ------------------ Modules -------------------------------
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//-------------------Custom Modules--------------------------
import { MaterialModule } from './material.module'

// ------------------ Components ----------------------------
import { HomePageComponent } from './_pages/home-page/home-page.component';

// ------------------ Services ------------------------------
import { ApiServiceService } from './_services/api-service.service'
import { InfoService } from './_services/info/info.service';
import { UserDetailsComponent } from './_pages/user-details/user-details.component';
import { FollowersComponent } from './_pages/followers/followers.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserDetailsComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    ApiServiceService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
