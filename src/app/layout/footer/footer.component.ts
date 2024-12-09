import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <p>© 2024 Star Wars Universe. All rights reserved.</p>
    </footer>
  `,
  styles: `
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--layout-bg);
      color: var(--text-color);
      font-size: 0.9rem;
      height: 40px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
