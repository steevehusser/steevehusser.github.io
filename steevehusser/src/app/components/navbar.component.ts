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
  @Input() title = '';
  @Output() navigate = new EventEmitter<string>();

  scrollTo(section: string) {
    this.navigate.emit(section);
  }
}
