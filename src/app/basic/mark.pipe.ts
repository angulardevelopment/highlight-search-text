import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

  // another way to highlight element
  transform(text:string, filter:string) : any{
    if(filter){
      console.log(filter)
      text = text.replace(new RegExp('('+filter+')', 'gi'), '<span class="highlighted">$1</span>');
    }
    return text;
  }

}
