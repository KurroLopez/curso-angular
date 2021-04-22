import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './components/primer/primer.component';
import { OtroComponent } from './components/otro/otro.component';
import { FueraComponent as OtroFuera} from './fuera/fuera.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { RotateDirective } from './directives/rotate.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { MinAgePipe } from './pipes/min-age.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CrudBasicoComponent } from './components/crud-basico/crud-basico.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserMasterComponent } from './components/users/user-master/user-master.component';
import { UserDetalleComponent } from './components/users/user-detalle/user-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedComponent } from './components/logged/logged.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    OtroComponent,
    OtroFuera,
    HighlightDirective,
    RotateDirective,
    PipesComponent,
    ExponentialPipe,
    MinAgePipe,
    GaleriaComponent,
    CrudBasicoComponent,
    MenuComponent,
    UserMasterComponent,
    UserDetalleComponent,
    LoginComponent,
    LoggedComponent,
    TemplateVariablesComponent,
    FormTemplateComponent,
    ObservablesComponent,
    FormReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
