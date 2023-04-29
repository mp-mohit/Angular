import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  isLogin: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    this.isLogin = this.authService.isLoggedIn();
    if (!this.isLogin) {
      this.router.navigate(['login']);
    }
  }
}
