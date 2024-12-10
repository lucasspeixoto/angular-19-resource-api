import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="header">
      <h1>Star Wars Universe</h1>
      <p>Explore the iconic films of the Star Wars saga.</p>
    </header>
  `,
  styles: `
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: var(--layout-bg);
      padding: 0.3rem;
      height: 60px;

      h1 {
        color: var(--secondary-color);
        font-size: 1.5rem;
        margin: 0.5rem;
      }

      p {
        font-size: 1rem;
        color: var(--text-color);
      }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
