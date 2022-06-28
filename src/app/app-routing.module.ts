import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UpdateOrderComponent } from './update-order/update-order.component';

const routes: Routes = [
  {path: 'orders', component: ListOrderComponent },
  {path: 'editorder/:id', component: UpdateOrderComponent },
  {path: 'addorder', component: CreateOrderComponent },
  {path: 'vieworder/:id', component: OrderDetailComponent },
  {path: '', redirectTo:'orders', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
