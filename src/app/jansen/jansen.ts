import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Figure, jansen } from '../projects';

@Component({
  selector: 'app-jansen',
  imports: [RouterLink],
  styleUrl: './jansen.css',
  templateUrl: './jansen.html',
})
export class Jansen {
  protected readonly project = jansen;
  protected readonly selected = signal<Figure | null>(null);

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.selected.set(null);
  }
}
