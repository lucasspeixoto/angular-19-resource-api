import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="main">
      <app-header />

      <div class="content">
        <router-outlet />
      </div>

      <app-footer />
    </div>
  `,
  styles: `
  .main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensures the container takes full viewport height */
  }

  .content {
    flex: 1;
  }
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
