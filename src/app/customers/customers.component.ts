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
  customers: Array<{ id: string; name: string; cpf: string; createdAt: string; updatedAt: string }> = [];
  customer = { id: '', name: '', cpf: '', createdAt: '', updatedAt: '' };
  showCreateCustomerModal = false;
  errorMessage = '';

  toggleCustomerModal() {
    this.showCreateCustomerModal = !this.showCreateCustomerModal;
    this.errorMessage = '';
  }

  validateCPF(cpf: string): boolean {
    const digitsOnly = cpf.replace(/\D/g, '');
    return digitsOnly.length === 11;
  }
  

  isCPFUnique(cpf: string): boolean {
    return !this.customers.some((customer) => customer.cpf === cpf);
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
}
