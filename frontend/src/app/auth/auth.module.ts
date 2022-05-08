import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoNoticiasComponent } from './listado-noticias/listado-noticias.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VisorComponent } from './visor/visor.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, FormularioComponent, ListadoNoticiasComponent, NavbarComponent, VisorComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]

})
export class AuthModule { }
