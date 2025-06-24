import { Component, ApplicationConfig, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-homepage',
  imports: [
    CommonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {  
  
  cardStats = [
    { title: 'Total Produtos', value: '1,247', icon: 'fas fa-box' },
    { title: 'Total Clientes', value: '856', icon: 'fas fa-users' },
    { title: 'Total Fornecedores', value: '134', icon: 'fas fa-building' },
    { title: 'Vendas Hoje', value: '89', icon: 'fas fa-dollar-sign' },
    { title: 'Pedidos Pendentes', value: '23', icon: 'fas fa-clock' }
  ];

  chartData = {
    sales: [
      { month: 'Jan', value: 4000 },
      { month: 'Fev', value: 3000 },
      { month: 'Mar', value: 5000 },
      { month: 'Abr', value: 4500 },
      { month: 'Mai', value: 6000 },
      { month: 'Jun', value: 5500 }
    ],
    topProducts: [
      { name: 'Produto A', sales: 85 },
      { name: 'Produto B', sales: 70 },
      { name: 'Produto C', sales: 60 },
      { name: 'Produto D', sales: 45 }
    ]
  };

  recentOrders = [
    { id: '001', customer: 'João Silva', product: 'Produto A', quantity: 2, status: 'Entregue', date: '18/06/2025' },
    { id: '002', customer: 'Maria Santos', product: 'Produto B', quantity: 1, status: 'Processando', date: '18/06/2025' },
    { id: '003', customer: 'Pedro Costa', product: 'Produto C', quantity: 3, status: 'Pendente', date: '17/06/2025' },
    { id: '004', customer: 'Ana Lima', product: 'Produto D', quantity: 1, status: 'Entregue', date: '17/06/2025' }
  ];
}
