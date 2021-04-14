import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudBasicoComponent } from './components/crud-basico/crud-basico.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PrimerComponent } from './components/primer/primer.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';
import { UserMasterComponent } from './components/users/user-master/user-master.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent},
  { path: 'users', component: CrudBasicoComponent },
  { path: 'binding', component: PrimerComponent},
  { path: 'users2', component: UserMasterComponent},
  { path: 'trv', component: TemplateVariablesComponent},
  { path: 'form-template', component: FormTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
