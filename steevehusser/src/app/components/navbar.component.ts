import { Component, EventEmitter, Output, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Input() title = '';
  @Input() active = '';
  @Output() navigate = new EventEmitter<string>();

  isDark = false;

  ngOnInit() {
    const stored = localStorage.getItem('theme');
    this.isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDark);
  }

  scrollTo(section: string) {
    this.navigate.emit(section);
  }
}
