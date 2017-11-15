import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from "./login/login.component";
import { HomeComponent} from "./home/home.component";
import { CadastroUserComponent } from "./cadastro-user/cadastro-user.component";


const  APP_ROUTES: Routes = [
  { path: "" , component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "cadastro", component: CadastroUserComponent }
];

 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
