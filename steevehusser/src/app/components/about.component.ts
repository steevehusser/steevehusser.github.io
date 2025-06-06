import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  @Input() visible = false;
}
