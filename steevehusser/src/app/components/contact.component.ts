import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  @Input() visible = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  // ID Formspree configuré
  private formspreeUrl = 'https://formspree.io/f/xgvyanzv';

  constructor(private http: HttpClient) { }

  onSubmitContact() {
    if (this.isSubmitting) return;

    // Vérifier que tous les champs sont remplis
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitStatus = 'error';
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    // Préparer les données pour Formspree
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('message', this.formData.message);

    // Envoyer via Formspree
    this.http.post(this.formspreeUrl, formData, {
      headers: {
        'Accept': 'application/json'
      }
    }).subscribe({
      next: (response) => {
        this.submitStatus = 'success';
        this.resetForm();
        this.isSubmitting = false;

        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          this.submitStatus = 'idle';
        }, 5000);
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        this.submitStatus = 'error';
        this.isSubmitting = false;

        // Masquer le message d'erreur après 5 secondes
        setTimeout(() => {
          this.submitStatus = 'idle';
        }, 5000);
      }
    });
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
