import { Component } from '@angular/core';

import { UserComponentComponent } from './user-component/user-component.component';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [UserComponentComponent],
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.css'
})
export class AdminPortalComponent {

}
