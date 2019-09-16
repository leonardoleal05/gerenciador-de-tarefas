import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

import { RouterModule } from '@angular/router';
import { tarefaRoutes } from './tarefas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tarefaRoutes)
  ],
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
