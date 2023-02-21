import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginUsuario: FormGroup

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  Ingresar(){
    const email = this.loginUsuario.value.email
    const password = this.loginUsuario.value.password

    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      if(user.user?.emailVerified){
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/verificar-correo']);
      }
    }).catch(() => {
    })
  }

}
