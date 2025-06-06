import { Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  @Input() title: string = '';
  @Output() navigate = new EventEmitter<string>();

  isMobileMenuOpen = false;

  scrollTo(section: string): void {
    this.navigate.emit(section);
    this.closeMobileMenu(); // Fermer le menu mobile après navigation
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
