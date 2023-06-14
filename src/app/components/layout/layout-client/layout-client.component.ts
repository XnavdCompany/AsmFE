import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.css']
})
export class LayoutClientComponent {
  constructor(private authService: AuthService, private router: Router,) { }
  logout() {
    this.authService.logout();
    window.location.reload();
  }

  userEmail!: string | null;
  userRole!: string | null;

  ngOnInit() {
    this.userEmail = this.authService.getUserEmail();
    this.userRole = this.authService.getUserRole();
  }


}

