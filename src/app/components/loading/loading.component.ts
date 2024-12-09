import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  template: `
    <div class="spinner-overlay">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styles: `
    .spinner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .spinner {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      z-index: 2000;
    }

    .spinner div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid var(--secondary-color);
      border-radius: 50%;
      animation: spinner-animate 1.2s linear infinite;
      border-color: var(--secondary-color) transparent transparent transparent;
      opacity: 0.8;
    }

    .spinner div:nth-child(1) {
      animation-delay: -0.45s;
    }

    .spinner div:nth-child(2) {
      animation-delay: -0.3s;
    }

    .spinner div:nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes spinner-animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
