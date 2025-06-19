import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  cardStats = [
    { title: 'Total Produtos', value: '1,247', icon: '📦' },
    { title: 'Total Clientes', value: '856', icon: '👥' },
    { title: 'Total Fornecedores', value: '134', icon: '🏢' },
    { title: 'Vendas Hoje', value: '89', icon: '💰' },
    { title: 'Pedidos Pendentes', value: '23', icon: '⏳' }
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

  recentActivities = [
    { action: 'Novo produto adicionado', time: '2 min atrás', type: 'success' },
    { action: 'Cliente cadastrado', time: '15 min atrás', type: 'info' },
    { action: 'Estoque baixo - Produto X', time: '1 hora atrás', type: 'warning' },
    { action: 'Venda realizada', time: '2 horas atrás', type: 'success' }
  ];

  recentOrders = [
    { id: '001', customer: 'João Silva', product: 'Produto A', quantity: 2, status: 'Entregue', date: '18/06/2025' },
    { id: '002', customer: 'Maria Santos', product: 'Produto B', quantity: 1, status: 'Processando', date: '18/06/2025' },
    { id: '003', customer: 'Pedro Costa', product: 'Produto C', quantity: 3, status: 'Pendente', date: '17/06/2025' },
    { id: '004', customer: 'Ana Lima', product: 'Produto D', quantity: 1, status: 'Entregue', date: '17/06/2025' }
  ];
}
