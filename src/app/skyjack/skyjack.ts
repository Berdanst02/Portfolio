import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Figure, skyjackFigures, skyjackIntro } from '../projects';

@Component({
  selector: 'app-skyjack',
  imports: [RouterLink],
  styleUrl: './skyjack.css',
  templateUrl: './skyjack.html',
})
export class Skyjack {
  protected readonly intro = skyjackIntro;
  protected readonly figures = skyjackFigures;
  protected readonly selected = signal<Figure | null>(null);

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.selected.set(null);
  }
}
