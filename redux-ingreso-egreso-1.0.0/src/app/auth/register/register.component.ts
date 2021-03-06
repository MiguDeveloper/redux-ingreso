import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: [],
})
export class RegisterComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  crearUsuario() {
    if (this.registroForm.invalid) {
      return;
    }

    Swal.fire({
      title: "Espere por favor",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    this.authServices
      .crearUsuario(this.registroForm.value)
      .then((credenciales) => {
        console.log(credenciales);
        Swal.close();
        this.router.navigate(["/"]);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  }
}
