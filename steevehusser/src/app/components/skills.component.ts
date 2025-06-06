import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent {
  @Input() skills: Skill[] = [];
  @Input() visible = false;
}
