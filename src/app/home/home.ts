import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experience, profile, Project, projects, skills } from '../projects';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly profile = profile;
  protected readonly skills = skills;
  protected readonly experience = experience;
  protected readonly projects = projects;
  protected readonly selected = signal<Project | null>(null);

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.selected.set(null);
  }
}
