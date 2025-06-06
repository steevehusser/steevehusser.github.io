import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  @Input() visible = false;
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmitContact() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      alert('Merci pour votre message ! Je vous recontacterai bientôt.');
      this.contactForm = { name: '', email: '', message: '' };
    }
  }
}
