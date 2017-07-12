import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'transform'})
export class TestPipe implements PipeTransform {
    transform(value: number) {
        return value * 2;
    }
}
