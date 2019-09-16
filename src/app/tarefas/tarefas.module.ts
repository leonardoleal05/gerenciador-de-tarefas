import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';


@NgModule({
  imports: [
    CommonModule
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
