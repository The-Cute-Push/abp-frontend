import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent],
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
    {
      id: "2",
      name: "Maçã",
      code: "ABC123DEF456",
      price: "15",
      cost: "8",
      quantity: "10",
      photo: "url",
      createdAt: "01/05/2025",
      updatedAt: "01/05/2025"
    },
    {
      id: "3",
      name: "Laranja",
      code: "GHI789JKL012",
      price: "10",
      cost: "5",
      quantity: "12",
      photo: "url",
      createdAt: "10/04/2025",
      updatedAt: "10/04/2025"
    },
    {
      id: "4",
      name: "Uva",
      code: "MNO345PQR678",
      price: "25",
      cost: "12",
      quantity: "7",
      photo: "url",
      createdAt: "15/06/2025",
      updatedAt: "15/06/2025"
    },
    {
      id: "5",
      name: "Abacaxi",
      code: "STU901VWX234",
      price: "30",
      cost: "18",
      quantity: "3",
      photo: "url",
      createdAt: "20/03/2025",
      updatedAt: "20/03/2025"
    }
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

  // Search functionality
  searchTerm: string = '';

  // Getter para a lista de produtos filtrados
  get filteredProducts() {
    if (!this.searchTerm) {
      return this.products;
    }
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.code.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.id.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  onSearchChange(value: string) {
    this.searchTerm = value;
    // Não precisamos de lógica de filtro adicional aqui, pois o getter faz o trabalho
    console.log('Searching for:', value);
  }

  onSearchSubmit(value: string) {
    this.searchTerm = value;
    // Também não precisamos de lógica de pesquisa adicional aqui, o getter lida com isso
    console.log('Search submitted:', value);
  }
}
