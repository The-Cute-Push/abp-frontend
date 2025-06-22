import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'O que você está procurando?';
  @Input() buttonText: string = 'Adicionar';
  @Input() searchValue: string = '';
  
  @Output() searchChange = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<void>();
  @Output() searchSubmit = new EventEmitter<string>();

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
    this.searchChange.emit(this.searchValue);
  }

  onSearchSubmit() {
    this.searchSubmit.emit(this.searchValue);
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
