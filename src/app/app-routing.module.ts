import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import { MantemProdutosComponent } from './produto/mantem-produtos/mantem-produtos.component';
import { ListagemProdutosComponent } from './produto/listagem-produtos/listagem-produtos.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'cadastroproduto',
    component: MantemProdutosComponent
  },
  {
    path: 'listagemprodutos',
    component: ListagemProdutosComponent
  },
  {
    path: 'editaproduto/:id',
    component: MantemProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
