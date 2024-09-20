import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Es requerido y debe ser un email valido
      password: ['', [Validators.required, Validators.minLength(6)]] // Este es requerido y minimo debe tener 6 caracteres
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica para autenticar al usuario
      console.log(this.loginForm.value);
      // Este sirve para redireccionar al catalogo despues de hacer el login exitoso
      this.router.navigate(['/catalogo']);
    } else {
      // Manejar errores de validación
      console.log('Formulario inválido');
    }
  }
}

