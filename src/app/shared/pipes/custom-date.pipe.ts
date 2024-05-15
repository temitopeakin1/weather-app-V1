
import { formatDate } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customeDate'
})

export class CustomDatePipe implements PipeTransform {
    transform(value: number, format: string = 'mediumDate'): string {
        return formatDate(value * 1000, format, 'en-US')
    }
}