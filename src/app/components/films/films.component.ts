import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import { Film } from '../../models/film';
import { LoadingComponent } from '../loading/loading.component';
import { FilmDatePipe } from '../../pipes/date.pipe';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  imports: [FilmDatePipe, LoadingComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent {
  public filmSearchWordKey = signal('');

  private httpClient = inject(HttpClient);

  public films = resource<Film[], { parameters: string }>({
    request: () => ({ parameters: this.filmSearchWordKey() }),
    loader: async ({ request, abortSignal }) => {
      const response = await fetch(
        `https://swapi.dev/api/films?search=${request.parameters}`,
        { signal: abortSignal }
      );
      if (!response.ok) throw new Error('somenthing went wrong!');
      const data = await response.json();
      return data.results;
    },
  });

  public films2 = rxResource<Film[], { parameters: string }>({
    request: () => ({ parameters: this.filmSearchWordKey() }),
    loader: ({ request }) => {
      return this.httpClient.get<Film[]>(
        `https://swapi.dev/api/films?search=${request.parameters}`
      );
    },
  });

  testingEffect = effect(() => {
    console.log(this.films2.value());
  });

  public searchFilmHandler(event: Event): void {
    const searchWord = (event.target as HTMLInputElement).value;
    this.filmSearchWordKey.set(searchWord);
  }
}
