import { Component, OnInit, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { PricingComponent } from './components/pricing.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Steeve Husser';

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
    pricing: false,
    contact: false
  };

  particles = Array.from({ length: 18 });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkVisibility();
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

    const sections = ['about', 'skills', 'experience', 'projects', 'pricing', 'contact'];
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

}
