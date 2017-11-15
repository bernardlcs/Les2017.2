import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { LoginComponent } from './login/login.component';
import { AutenticarService } from './login/autenticar.service';
import { HomeComponent } from './home/home.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    LoginComponent,

    HomeComponent,
    CadastroUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ AutenticarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
