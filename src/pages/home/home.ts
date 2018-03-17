import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef:ElementRef;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){
    const location = new google.maps.LatLng(36.686788,-6.126611);

    const option = {
      center: location,
      zoom: 13
    };

    let map = new google.maps.Map(this.mapRef.nativeElement, option);

    this.addMarker(location, map);
  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }

}
