import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudBasicoComponent } from './components/crud-basico/crud-basico.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PrimerComponent } from './components/primer/primer.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';
import { UserMasterComponent } from './components/users/user-master/user-master.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { AuthGuard } from './guards/auth.guard';
import { HasUnsavedChangesGuard } from './guards/has-unsaved-changes.guard';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo.component';

const routes: Routes = [
  { path: '', redirectTo: '/binding' ,pathMatch: 'full'},
  { path: 'galeria', component: GaleriaComponent, canActivate: [AuthGuard]},
  { path: 'users', component: CrudBasicoComponent },
  { path: 'binding', component: PrimerComponent},
  { path: 'users2', component: UserMasterComponent},
  { path: 'trv', component: TemplateVariablesComponent},
  { path: 'form-template/:id', component: FormTemplateComponent, canDeactivate: [HasUnsavedChangesGuard]},
  { path: 'observables', component: ObservablesComponent},
  { path: 'form-reactivo/:id', component: FormReactivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
