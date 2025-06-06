import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' // Vérifiez que c'est bien .scss
})
export class AppComponent implements OnInit {
  title = 'Steeve Husser';
  subtitle = '';
  private fullSubtitle = 'Développeur Full Stack';
  isDarkMode = false;

  // Contact form
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  // Skills data
  skills = [
    { name: '.NET', level: 95, icon: '🔧' },
    { name: 'Angular', level: 90, icon: '🅰️' },
    { name: 'SQL', level: 88, icon: '🗄️' },
    { name: 'Mobile Dev', level: 85, icon: '📱' },
    { name: 'Web Dev', level: 92, icon: '🌐' },
    { name: 'API', level: 90, icon: '🔗' },
    { name: 'Cloud', level: 80, icon: '☁️' }
  ];

  // Experience data
  experiences = [
    {
      title: 'Développeur Full Stack Senior',
      period: '2019 - Présent',
      description: 'Développement d\'applications web complexes avec .NET et Angular, gestion de bases de données SQL, encadrement d\'équipes junior.'
    },
    {
      title: 'Développeur .NET',
      period: '2016 - 2019',
      description: 'Conception et développement d\'APIs REST, applications desktop et web, optimisation des performances.'
    },
    {
      title: 'Développeur Web',
      period: '2014 - 2016',
      description: 'Création de sites web responsives, intégration frontend/backend, maintenance et évolution d\'applications existantes.'
    }
  ];

  // Animation states
  isVisible = {
    about: false,
    skills: false,
    experience: false,
    projects: false,
    contact: false
  };

  particles = Array.from({ length: 18 });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkVisibility();
      this.initTheme();
      this.startTypingEffect();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkVisibility();
    }
  }

  checkVisibility() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        this.isVisible[section as keyof typeof this.isVisible] = isVisible;
      }
    });
  }

  scrollToSection(sectionId: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmitContact() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      // Simulate form submission
      alert('Merci pour votre message ! Je vous recontacterai bientôt.');
      this.contactForm = { name: '', email: '', message: '' };
    }
  }

  openLinkedIn() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://linkedin.com/in/steevehusser', '_blank');
    }
  }

  openGitHub() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://github.com/steevehusser', '_blank');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode ? '1' : '0');
    }
  }

  initTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('darkMode') === '1';
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  }

  startTypingEffect() {
    if (!isPlatformBrowser(this.platformId)) {
      this.subtitle = this.fullSubtitle;
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      this.subtitle += this.fullSubtitle.charAt(index);
      index++;
      if (index === this.fullSubtitle.length) {
        clearInterval(interval);
      }
    }, 100);
  }

  sendEmail() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = 'mailto:steeve.husser@email.com';
    }
  }
}
