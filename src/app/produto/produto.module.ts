import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { MantemProdutosComponent } from './mantem-produtos/mantem-produtos.component';



@NgModule({
  declarations: [
    ListagemProdutosComponent,
    MantemProdutosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
