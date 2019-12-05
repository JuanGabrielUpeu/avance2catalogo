import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FotoComponent } from './foto/foto.component';
import {Route, RouterModule  } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

const routes : Route [] = [
  {path: '', component: CatalogoComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'foto', component: FotoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    FormularioComponent,
    FotoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
