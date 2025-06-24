import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Array<{ id: string; name: string; cpf: string; createdAt: string; updatedAt: string }> = [
    {
      id: '1',
      name: 'João Silva',
      cpf: '123.456.789-00',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      name: 'Maria Oliveira',
      cpf: '987.654.321-11',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    },
  ];

  // Array para armazenar os clientes filtrados
  filteredCustomers: Array<{ id: string; name: string; cpf: string; createdAt: string; updatedAt: string }> = [];

  customer = { id: '', name: '', cpf: '', createdAt: '', updatedAt: '' };
  customerToEdit: { id: string; name: string; cpf: string; createdAt: string; updatedAt: string } | null = null;
  customerToDelete: { id: string; name: string; cpf: string; createdAt: string; updatedAt: string } | null = null;

  showCreateCustomerModal = false;
  showEditCustomerModal = false;
  showDeleteConfirmationModal = false;

  errorMessage = '';

  // Search functionality
  searchTerm: string = '';

  ngOnInit(): void {
    // Inicializa a lista filtrada com todos os clientes
    this.filteredCustomers = this.customers;
  }

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
    this.filterCustomers(); // Atualiza a lista exibida
    this.customer = { id: '', name: '', cpf: '', createdAt: '', updatedAt: '' };
    this.showCreateCustomerModal = false;
    this.errorMessage = '';
  }

  saveEditedCustomer() {
    if (!this.validateCPF(this.customerToEdit!.cpf)) {
      this.errorMessage = 'CPF inválido. Por favor, insira um CPF no formato 000.000.000-00.';
      return;
    }

    const originalCustomer = this.customers.find(c => c.id === this.customerToEdit!.id);
    if (this.customerToEdit!.cpf !== originalCustomer?.cpf && !this.isCPFUnique(this.customerToEdit!.cpf)) {
      this.errorMessage = 'CPF já cadastrado. Por favor, insira um CPF único.';
      return;
    }

    const index = this.customers.findIndex((c) => c.id === this.customerToEdit!.id);
    if (index !== -1) {
      this.customers[index] = {
        ...this.customerToEdit!,
        updatedAt: new Date().toLocaleDateString(),
      };
      this.filterCustomers(); // Atualiza a lista exibida
    }

    this.customerToEdit = null;
    this.showEditCustomerModal = false;
    this.errorMessage = '';
  }

  deleteCustomer() {
    if (this.customerToDelete) {
      this.customers = this.customers.filter((c) => c.id !== this.customerToDelete!.id);
      this.filterCustomers(); // Atualiza a lista exibida
      this.customerToDelete = null;
      this.showDeleteConfirmationModal = false;
    }
  }

  // Lógica de busca atualizada
  onSearchChange(value: string) {
    this.searchTerm = value;
    this.filterCustomers();
  }

  onSearchSubmit(value: string) {
    this.searchTerm = value;
    this.filterCustomers();
  }

  // Nova função para filtrar os clientes
  filterCustomers() {
    const term = this.searchTerm.toLowerCase();
    if (!term) {
      this.filteredCustomers = this.customers;
    } else {
      this.filteredCustomers = this.customers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(term) ||
          customer.cpf.includes(term)
      );
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