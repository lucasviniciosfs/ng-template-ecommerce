import { HomeComponent } from './home/home.component';
//import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';

const routes: Routes = [
  // {
  //   path: 'pedidos',
  //   loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule)
  // },
  // {
  //   path: 'pedido-detalhe',
  //   loadChildren: () => import('./pedido-detalhe/pedido-detalhe.module').then(m => m.PedidoDetalheModule)
  // },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule)
  },
  // {
  //   path: 'cadastro',
  //   loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  // },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: 'produto-detalhe',
    loadChildren: () => import('./produto-detalhe/produto-detalhe.module').then(m => m.ProdutoDetalheModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'recuperar-senha/:token',
  //   component: RecuperaSenhaComponent
  // },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
