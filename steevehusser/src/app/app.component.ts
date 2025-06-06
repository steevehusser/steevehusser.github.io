import { Component, OnInit, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ServicesComponent } from './components/services.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
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
    ServicesComponent,
    SkillsComponent,
    ProjectsComponent,
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

  // Animation states - Initialisation avec true pour s'assurer que les sections s'affichent
  isVisible = {
    about: true,
    services: true,
    skills: true,
    projects: true,
    contact: true
  };

  particles = Array.from({ length: 18 });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Délai pour permettre au DOM de se charger complètement
      setTimeout(() => {
        this.checkVisibility();
      }, 100);
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

    const sections = ['about', 'services', 'skills', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        this.isVisible[section as keyof typeof this.isVisible] = isVisible;
      } else {
        // Fallback: si l'élément n'est pas trouvé, le rendre visible
        this.isVisible[section as keyof typeof this.isVisible] = true;
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
