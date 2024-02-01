import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdminPortalComponent } from './admin-portal/admin-portal.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminPortalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'your-angular-app';
}
