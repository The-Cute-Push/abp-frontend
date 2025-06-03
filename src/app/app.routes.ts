import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

export const routes: Routes = [
    {path: "customers", component: CustomersComponent},
    {path: "products", component: ProductsComponent},
    {path: "suppliers", component: SuppliersComponent},
];
