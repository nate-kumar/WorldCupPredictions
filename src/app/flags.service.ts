import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor() { }

  getFlag(country: string) {
    return 'assets/images/national_flags_svg/Flag_of_' + country + '.svg';
  }
}
