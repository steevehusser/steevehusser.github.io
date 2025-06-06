import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  @Input() title = '';
  @Input() particles: any[] = [];
  @Output() contact = new EventEmitter<void>();
  @Output() services = new EventEmitter<void>();

  scrollToContact() {
    this.contact.emit();
  }

  scrollToServices() {
    this.services.emit();
  }
}
