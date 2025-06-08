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
  modalCadastro = false;
  modalEdicao = false;
  modalConfirmacao = false;

  cliente = { nome: '' };

  cadastrarCliente() {
    console.log('Cadastrado:', this.cliente.nome);
    this.modalCadastro = false;
  }

  editarCliente() {
    console.log('Editado:', this.cliente.nome);
    this.modalEdicao = false;
  }

  excluirCliente() {
    console.log('Excluído:', this.cliente.nome);
    this.modalConfirmacao = false;
  }
}
