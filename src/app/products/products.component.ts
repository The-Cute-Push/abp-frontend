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
    { id: "1", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "2", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "3", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "4", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "5", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "6", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "7", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "8", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "9", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "10", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "11", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "12", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "13", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "14", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "15", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "16", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "17", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "18", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "19", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "20", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "21", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "22", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "23", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "24", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "25", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "26", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "27", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "28", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "29", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "30", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "31", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "32", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "33", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "34", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "35", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "36", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "37", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "38", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "39", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "40", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "41", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "42", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "43", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "44", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "45", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "46", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "47", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "48", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "49", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
    { id: "50", name: "Banana", code: "8A83D45GCDNJ", price: "20", cost: "10", quantity: "4", photo: "url", createdAt: "02/06/2025", updatedAt: "02/06/2025" },

  ];

  // Modal and product creation logic
  showProductFormModal  = false;

  toggleProductModal() {
    this.showProductFormModal = !this.showProductFormModal;
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

  saveProduct() {
    const newProduct = { ...this.productModel };

    newProduct.id = (this.products.length + 1).toString();
    newProduct.code = this.generateCode(12);

    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR');
    newProduct.createdAt = formattedDate;
    newProduct.updatedAt = formattedDate;

    this.products.push(newProduct);

    console.log(newProduct);
    console.log(this.products);

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

    this.showProductFormModal  = false;
  }

  // Modal and product deletion logic
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
    console.log(this.products);
  }

  cancelDeletion() {
    this.showDeleteModal = false;
    this.productToDelete = null;
    console.log("Deletion cancelled");
  }
}
