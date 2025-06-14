import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers = [
    { id: "1", name: "Jorge", cpf: "231.345.234-21", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
  ]
  showCreateProductModal = false;
  showEditModal = false;
  showDeleteModal = false;

  customer = { id: "", name: "", cpf: "", createdAt: "", updatedAt: "" };

  createCustomer() {
    console.log('Created:', this.customer.name);
    this.showCreateProductModal = false;
  }

  editCustomer() {
    console.log('Edited:', this.customer.name);
    this.showEditModal = false;
  }

  deleteCustomer() {
    console.log('Deleted:', this.customer.name);
    this.showDeleteModal = false;
  }

  toggleCustomerModal() {
  this.showCreateProductModal = !this.showCreateProductModal;
}
}