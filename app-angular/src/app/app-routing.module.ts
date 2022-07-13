import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditCursosComponent } from './edit-cursos/edit-cursos.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { HomeComponent } from './home/home.component';
import { LimboComponent } from './limbo/limbo.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gerenciar', component: GerenciarComponent},
  {path: 'logs', component: LogsComponent},
  {path: 'limbo', component: LimboComponent},
  {path: 'edit', component:  EditCursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
