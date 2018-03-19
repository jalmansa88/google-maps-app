import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { GMapPage } from '../gmap/gmap';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GMapPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
