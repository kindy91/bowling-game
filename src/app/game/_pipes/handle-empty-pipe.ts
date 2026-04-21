import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handleEmpty',
})
export class HandleEmptyPipe implements PipeTransform {
    transform(value: unknown, placeholder = '—'): unknown {
    if (value === undefined || value === null) return placeholder;

    return value;
  }
}
