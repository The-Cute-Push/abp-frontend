import { Component } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  imports: [],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent {
  suppliers = [
    { id: "1", name: "Ja", cnpj: "12.234.634/0001-23", email: "ja@gmail", contact: "48997435465", address: "Rua 123", createdAt: "02/06/2025", updatedAt: "02/06/2025" },
  ]
}
