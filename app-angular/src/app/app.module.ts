import { NgModule } from '@angular/core';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CastServiceService } from './cast-service.service';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [	
    AppComponent,
    GerenciarComponent,
    HomeComponent,
    LogsComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CastServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
