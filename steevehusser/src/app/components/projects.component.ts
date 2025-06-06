import { Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  @Input() visible = false;
  @Output() contact = new EventEmitter<void>();

  openContact() {
    this.contact.emit();
  }
}
