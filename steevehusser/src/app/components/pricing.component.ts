import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PricingComponent {
  @Input() visible = false;
  @Output() contact = new EventEmitter<void>();

  openContact() {
    this.contact.emit();
  }
}
