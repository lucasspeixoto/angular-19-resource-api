import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmAppDate',
})
export class FilmDatePipe implements PipeTransform {

  public transform(date: string): string {
    const splitedDate = date.split("-")
    return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
  }

}
