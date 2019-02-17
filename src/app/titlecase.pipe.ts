import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

    transform(value: string, ...args: any[]) {
        if (!value)
            return null;

        if (value.toLowerCase().indexOf(' ') > 0) {
            return value.toLowerCase().split(' ').map((word) => {
                return word.replace(word[0], word[0].toUpperCase());
            }).join(' ');
        }
        else {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
        }

    }

}

