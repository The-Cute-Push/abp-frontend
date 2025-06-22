import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = ''; 

  constructor(private router: Router) {}

  login() {
    if (this.email === 'adm@gmail.com' && this.password === '1234') {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Usuário ou senha inválidos.';
      this.autoHideErrorMessage();
    }
  }

  autoHideErrorMessage() {
    setTimeout(() => {
      this.errorMessage = ''; 
    }, 2500); 
  }
}
