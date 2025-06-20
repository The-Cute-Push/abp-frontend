import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: "1",
      name: "Banana",
      code: "8A83D45GCDNJ",
      price: "20",
      cost: "10",
      quantity: "4",
      photo: "url",
      createdAt: "02/06/2025",
      updatedAt: "02/06/2025"
    },
  ];

  productModel = {
    id: '',
    name: '',
    code: '',
    price: '',
    cost: '',
    quantity: '',
    photo: 'url',
    createdAt: '',
    updatedAt: ''
  };

  showProductFormModal = false;
  toggleProductModal() {
    this.showProductFormModal = !this.showProductFormModal;
  }

  showEditModal = false;
  productToEdit: any = null;

  openEditModal(product: any) {
    this.productToEdit = { ...product }; 
    this.showEditModal = true;
  }

  saveEditedProduct() {
    const index = this.products.findIndex(p => p.id === this.productToEdit.id);
    if (index !== -1) {
      this.products[index] = {
        ...this.productToEdit,
        updatedAt: new Date().toLocaleDateString('pt-BR')
      };
    }
    this.showEditModal = false;
    this.productToEdit = null;
    console.log("Product successfully updated");
    console.log(this.products);
  }

  cancelEdit() {
    this.showEditModal = false;
    this.productToEdit = null;
    console.log("Edit cancelled");
  }

  saveProduct() {
    const newProduct = { ...this.productModel };

    newProduct.id = (this.products.length + 1).toString();
    newProduct.code = this.generateCode(12);
    const formattedDate = new Date().toLocaleDateString('pt-BR');
    newProduct.createdAt = formattedDate;
    newProduct.updatedAt = formattedDate;

    this.products.push(newProduct);
    console.log("Product created:", newProduct);

    this.productModel = {
      id: '',
      name: '',
      code: '',
      price: '',
      cost: '',
      quantity: '',
      photo: 'url',
      createdAt: '',
      updatedAt: ''
    };

    this.showProductFormModal = false;
  }

  generateCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      code += characters[index];
    }
    return code;
  }

  showDeleteModal = false;
  productToDelete: any = null;

  openDeleteModal(product: any) {
    this.productToDelete = product;
    this.showDeleteModal = true;
  }

  confirmDeletion() {
    this.products = this.products.filter(p => p.id !== this.productToDelete.id);
    this.showDeleteModal = false;
    this.productToDelete = null;
    console.log("Product successfully deleted");
  }

  cancelDeletion() {
    this.showDeleteModal = false;
    this.productToDelete = null;
    console.log("Deletion cancelled");
  }
}
