import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    Swal.fire({
      title: "Espere por favor",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    this.authServices
      .loginUsuario(this.loginForm.value)
      .then((credenciales) => {
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
