"use strict"
function initMap() {
    const position = { lat: 55.1930197, lng: 30.2070437 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: position,
    });
    const marker = new google.maps.Marker({
      position,
      map,
    });
  }
  
