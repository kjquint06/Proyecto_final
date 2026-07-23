import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { EquipamientoComponent } from './components/equipamiento/equipamiento.component';
import { GeneracionComponent } from './components/generacion/generacion.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { OpcionValoresComponent } from './components/opcion-valores/opcion-valores.component';
import { SerieComponent } from './components/serie/serie.component';
import { EspecificacionesComponent } from './components/especificaciones/especificaciones.component';
import { EspecificacionesValoresComponent } from './components/especificaciones-valores/especificaciones-valores.component';
import { ModificacionesComponent } from './components/modificaciones/modificaciones.component';
import { YearComponent } from './components/year/year.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogComponent,
    EquipamientoComponent,
    GeneracionComponent,
    MarcaComponent,
    ModeloComponent,
    TipoComponent,
    OpcionesComponent,
    OpcionValoresComponent,
    SerieComponent,
    EspecificacionesComponent,
    EspecificacionesValoresComponent,
    ModificacionesComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
