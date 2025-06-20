import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  customers: Array<{ id: string; name: string; cpf: string; createdAt: string; updatedAt: string }> = [
    {
      id: '1',
      name: 'João Silva',
      cpf: '123.456.789-00',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    },
  ];

  customer = { id: '', name: '', cpf: '', createdAt: '', updatedAt: '' };
  customerToEdit: { id: string; name: string; cpf: string; createdAt: string; updatedAt: string } | null = null;
  customerToDelete: { id: string; name: string; cpf: string; createdAt: string; updatedAt: string } | null = null;

  showCreateCustomerModal = false;
  showEditCustomerModal = false;
  showDeleteConfirmationModal = false;

  errorMessage = '';

  toggleCustomerModal() {
    this.showCreateCustomerModal = !this.showCreateCustomerModal;
    this.errorMessage = '';
  }

  openEditCustomerModal(customer: { id: string; name: string; cpf: string; createdAt: string; updatedAt: string }) {
    this.customerToEdit = { ...customer };
    this.showEditCustomerModal = true;
    this.errorMessage = '';
  }

  confirmDeleteCustomer(customer: { id: string; name: string; cpf: string; createdAt: string; updatedAt: string }) {
    this.customerToDelete = customer;
    this.showDeleteConfirmationModal = true;
  }

  cancelDelete() {
    this.customerToDelete = null;
    this.showDeleteConfirmationModal = false;
  }

  createCustomer() {
    if (!this.validateCPF(this.customer.cpf)) {
      this.errorMessage = 'CPF inválido. Por favor, insira um CPF no formato 000.000.000-00.';
      return;
    }

    if (!this.isCPFUnique(this.customer.cpf)) {
      this.errorMessage = 'CPF já cadastrado. Por favor, insira um CPF único.';
      return;
    }

    const newCustomer = {
      ...this.customer,
      id: (this.customers.length + 1).toString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    };
    this.customers.push(newCustomer);
    this.customer = { id: '', name: '', cpf: '', createdAt: '', updatedAt: '' };
    this.showCreateCustomerModal = false;
    this.errorMessage = '';
  }

  saveEditedCustomer() {
    if (!this.validateCPF(this.customerToEdit!.cpf)) {
      this.errorMessage = 'CPF inválido. Por favor, insira um CPF no formato 000.000.000-00.';
      return;
    }

    if (
      !this.isCPFUnique(this.customerToEdit!.cpf) &&
      this.customerToEdit!.cpf !== this.customers.find(c => c.id === this.customerToEdit!.id)?.cpf
    ) {
      this.errorMessage = 'CPF já cadastrado. Por favor, insira um CPF único.';
      return;
    }

    const index = this.customers.findIndex((c) => c.id === this.customerToEdit!.id);
    if (index !== -1) {
      this.customers[index] = {
        ...this.customerToEdit!,
        updatedAt: new Date().toLocaleDateString(),
      };
    }

    this.customerToEdit = null;
    this.showEditCustomerModal = false;
    this.errorMessage = '';
  }

  deleteCustomer() {
    if (this.customerToDelete) {
      this.customers = this.customers.filter((c) => c.id !== this.customerToDelete!.id);
      this.customerToDelete = null;
      this.showDeleteConfirmationModal = false;
    }
  }

  validateCPF(cpf: string): boolean {
    const digitsOnly = cpf.replace(/\D/g, '');
    return digitsOnly.length === 11;
  }

  isCPFUnique(cpf: string): boolean {
    return !this.customers.some((customer) => customer.cpf === cpf);
  }
}
