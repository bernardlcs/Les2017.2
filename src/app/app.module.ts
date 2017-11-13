import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { LoginComponent } from './login/login.component';
import { AutenticarService } from './login/autenticar.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AutenticarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
