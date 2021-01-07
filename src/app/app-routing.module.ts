import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/productos/productos.component'; // products
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./components/inicio/home.module').then(m => m.HomeModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'products', component: HomeComponent, canActivate: [AdminGuard]}, // products
  {path: 'contact', component: ContactsComponent, canActivate: [AdminGuard]},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
