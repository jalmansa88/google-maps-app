import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'gmap-home',
  templateUrl: 'gmap.html'
})
export class GMapPage {

  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, public geo: Geolocation) {

  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then((pos) => {
      console.log('success coords received')
      const location = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.initMap(location);
    }).catch(error => {
        console.log('error getting geoposition');
        //this.initMap();
      });
  }

  initMap(location) {
    console.log('initing map');
    const options = {
      center: location,
      zoom: 13,
    }
    console.log(this.mapRef.nativeElement);

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);

    map.animateCamera(location);

  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map,
    })
  }
}
