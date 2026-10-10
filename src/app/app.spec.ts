import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { projects } from './projects';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should render a card for every project', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.card');
    expect(cards.length).toBe(projects.length);
  });

  it('should filter by category', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const buttons = el.querySelectorAll<HTMLButtonElement>('.filters button');
    buttons[1].click();
    await fixture.whenStable();
    const category = buttons[1].textContent!.trim();
    expect(el.querySelectorAll('.card').length).toBe(
      projects.filter((p) => p.category === category).length,
    );
  });
});
