import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})

export class SuppliersComponent {
  suppliers = [
    {
      id: "1",
      name: "Ja",
      cnpj: "12.234.634/0001-23",
      email: "ja@gmail",
      contact: "48997435465",
      address: "Rua 123",
      createdAt: "02/06/2025",
      updatedAt: "02/06/2025"
    }
  ];

  showSupplierFormModal = false;
  showDeleteModal = false;
  supplierToDelete: any = null;

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

  toggleSupplierModal() {
    this.showSupplierFormModal = !this.showSupplierFormModal;
  }

  saveSupplier() {
    const newSupplier = { ...this.supplierModel };
    newSupplier.id = (this.suppliers.length + 1).toString();

    const today = new Date().toLocaleDateString('pt-BR');
    newSupplier.createdAt = today;
    newSupplier.updatedAt = today;

    this.suppliers.push(newSupplier);

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

    this.showSupplierFormModal = false;
  }

  openDeleteModal(supplier: any) {
    this.supplierToDelete = supplier;
    this.showDeleteModal = true;
  }

  confirmDeletion() {
    this.suppliers = this.suppliers.filter(s => s.id !== this.supplierToDelete.id);
    this.showDeleteModal = false;
    this.supplierToDelete = null;
  }

  cancelDeletion() {
    this.showDeleteModal = false;
    this.supplierToDelete = null;
  }
}
