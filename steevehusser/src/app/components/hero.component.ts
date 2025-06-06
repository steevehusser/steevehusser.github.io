import { Component, EventEmitter, Input, Output, ViewEncapsulation, HostListener } from '@angular/core';
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

  scrollToContact() {
    this.contact.emit();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const hero = document.querySelector('.hero-section') as HTMLElement;
    if (hero) {
      hero.style.backgroundPositionY = `${-window.pageYOffset * 0.3}px`;
    }
  }
}
