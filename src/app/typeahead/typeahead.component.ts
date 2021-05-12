import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {

  value = '';
  list = [];
  constructor() { }


  ngOnInit() {











  }

  getData() {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then((data) => {
    cities.push(...data)
    this.displayMatches(cities)
  });
  }

  displayMatches(cities) {
    const matchArray = this.findMatches(this.value, cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl"><b>${this.value}</b></span>`);
      const stateName = place.state.replace(regex, `<span class="hl"><b>${this.value}</b></span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${this.numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    this.list = html;
  }

  findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex)
    });
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
