import { Component, computed, HostListener, signal } from '@angular/core';
import { profile, Project, projects } from './projects';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();

  protected readonly categories = ['All', ...new Set(projects.map((p) => p.category))];
  protected readonly activeCategory = signal('All');
  protected readonly selected = signal<Project | null>(null);
  protected readonly imageIndex = signal(0);

  protected readonly visibleProjects = computed(() => {
    const category = this.activeCategory();
    return category === 'All' ? projects : projects.filter((p) => p.category === category);
  });

  protected open(project: Project): void {
    this.imageIndex.set(0);
    this.selected.set(project);
  }

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.selected.set(null);
  }

  protected step(direction: number): void {
    const count = this.selected()?.images.length ?? 0;
    if (count > 1) {
      this.imageIndex.update((i) => (i + direction + count) % count);
    }
  }
}
