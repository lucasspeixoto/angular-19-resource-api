import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FilmDatePipe } from '../../pipes/date.pipe';
import { mockedFilms } from '../../../__mocks__/films';

@Component({
  selector: 'app-films',
  imports: [FilmDatePipe],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent {
  public films = mockedFilms;
}
