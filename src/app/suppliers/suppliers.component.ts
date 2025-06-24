import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent implements OnInit {
  suppliers = [
    {
      id: "1",
      name: "Distribuidora de Parafusos União",
      cnpj: "12.345.678/0001-99",
      email: "contato@uniao.com",
      contact: "48999887766",
      address: "Rua dos Parafusos, 123",
      createdAt: "01/06/2025",
      updatedAt: "01/06/2025"
    },
    {
      id: "2",
      name: "Fornecedora de Chapas Metálicas Aço Forte",
      cnpj: "98.765.432/0001-11",
      email: "vendas@acoforte.com.br",
      contact: "11988776655",
      address: "Avenida Industrial, 500",
      createdAt: "02/06/2025",
      updatedAt: "02/06/2025"
    }
  ];

  // Array para armazenar os fornecedores filtrados
  filteredSuppliers: any[] = [];

  showSupplierFormModal = false;
  showDeleteModal = false;
  supplierToDelete: any = null;
  isEditing = false;
  supplierModel = {
    id: '',
    name: '',
    cnpj: '',
    email: '',
    contact: '',
    address: '',
    createdAt: '',
    updatedAt: ''
  };

  // Search functionality
  searchTerm: string = '';

  ngOnInit(): void {
    // No início, a lista filtrada contém todos os fornecedores
    this.filteredSuppliers = this.suppliers;
  }

  onSearchChange(value: string) {
    this.searchTerm = value;
    this.filterSuppliers(); // Chama a função de filtro
  }

  onSearchSubmit(value: string) {
    this.searchTerm = value;
    this.filterSuppliers(); // Chama a função de filtro
  }

  filterSuppliers() {
    const term = this.searchTerm.toLowerCase();
    if (!term) {
      this.filteredSuppliers = this.suppliers;
    } else {
      this.filteredSuppliers = this.suppliers.filter(
        (supplier) =>
          supplier.name.toLowerCase().includes(term) ||
          supplier.cnpj.includes(term)
      );
    }
  }

  toggleSupplierModal() {
    this.showSupplierFormModal = !this.showSupplierFormModal;
    if (!this.showSupplierFormModal) {
      this.resetSupplierModel();
    }
  }

  saveSupplier() {
    if (this.isEditing) {
      const index = this.suppliers.findIndex(s => s.id === this.supplierModel.id);
      if (index !== -1) {
        const today = new Date().toLocaleDateString('pt-BR');
        this.supplierModel.updatedAt = today;
        this.suppliers[index] = { ...this.supplierModel };
      }
    } else {
      const newSupplier = { ...this.supplierModel };
      newSupplier.id = (this.suppliers.length + 1).toString();

      const today = new Date().toLocaleDateString('pt-BR');
      newSupplier.createdAt = today;
      newSupplier.updatedAt = today;

      this.suppliers.push(newSupplier);
    }
    this.filterSuppliers(); // Atualiza a visualização após salvar
    this.toggleSupplierModal();
  }

  openEditModal(supplier: any) {
    this.supplierModel = { ...supplier };
    this.isEditing = true;
    this.showSupplierFormModal = true;
  }

  resetSupplierModel() {
    this.supplierModel = {
      id: '',
      name: '',
      cnpj: '',
      email: '',
      contact: '',
      address: '',
      createdAt: '',
      updatedAt: ''
    };
    this.isEditing = false;
  }

  openDeleteModal(supplier: any) {
    this.supplierToDelete = supplier;
    this.showDeleteModal = true;
  }

  confirmDeletion() {
    this.suppliers = this.suppliers.filter(s => s.id !== this.supplierToDelete.id);
    this.filterSuppliers(); // Atualiza a visualização após excluir
    this.showDeleteModal = false;
    this.supplierToDelete = null;
  }

  cancelDeletion() {
    this.showDeleteModal = false;
    this.supplierToDelete = null;
  }
}