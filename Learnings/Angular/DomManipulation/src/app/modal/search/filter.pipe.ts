import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cities: any, searchValue: any): any {
    //check search term in array
    if(searchValue === undefined){
        return cities;
    }
    return cities.filter(function(city) {
        return city.toLowerCase().includes(searchValue.toLowerCase());
    })
  }

}
