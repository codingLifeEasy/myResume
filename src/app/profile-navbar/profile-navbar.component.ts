import { Component } from '@angular/core';

@Component({
  selector: 'navbarrr',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.scss']
})
export class ProfileNavbarComponent {
  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  this.menuOpen = false
}

}

