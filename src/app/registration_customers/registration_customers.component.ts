import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration_customers.component.html',
  styleUrls: ['./registration_customers.component.css']
})
export class RegistrationCustomersComponent {
  newCustomer = {
    name: '',
    cpf: ''
  };

  customers = [
    { id: '1', name: 'Jorge', cpf: '231.345.234-21', createdAt: '02/06/2025', updatedAt: '02/06/2025' }
  ];

  salvar() {
    if (this.newCustomer.name.trim() && this.newCustomer.cpf.trim()) {
      const newId = (this.customers.length + 1).toString();
      const today = new Date().toLocaleDateString();

      this.customers.push({
        id: newId,
        name: this.newCustomer.name,
        cpf: this.newCustomer.cpf,
        createdAt: today,
        updatedAt: today
      });

      // Limpa o formulário
      this.newCustomer = { name: '', cpf: '' };
    } else {
      alert('Por favor, preencha todos os campos antes de salvar.');
    }
  }
}
