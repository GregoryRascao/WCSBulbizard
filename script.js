const navig = document.getElementById("nav-top");

window.addEventListener("scroll", event =>{
    navig.classList.add("new");
});


// ASTRIDA MAP


// Store old reference
const appendChild = Element.prototype.appendChild;

// All services to catch
const urlCatchers = [
  "/AuthenticationService.Authenticate?",
  "/QuotaService.RecordEvent?"
];

// Google Map is using JSONP.
// So we only need to detect the services removing access and disabling them by not
// inserting them inside the DOM
Element.prototype.appendChild = function (element) {
  const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
  const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

  if (!isGMapAccessScript) {
    return appendChild.call(this, element);
  }

  // Extract the callback to call it with success data
  // Only needed if you actually want to use Autocomplete/SearchBox API
  //const callback = element.src.split(/.*callback=([^\&]+)/, 2).pop();
  //const [a, b] = callback.split('.');
  //window[a][b]([1, null, 0, null, null, [1]]);

  // Returns the element to be compliant with the appendChild API
  return element;
};

  // const initMap = () => {
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //        center: {lat: 50.8467035, lng: 4.3572889},
  //        zoom: 10
  //   });

  //    initMap();



  // const villes = {
  //   "bruxelles" : {"lat": 50.8467035, "lng": 4.3572889},
  //   "paris" : {"lat": 48.866667, "lng": 2.333333},
  //   "biarritz" : {"lat": 43.4832523, "lng": -1.5592776}
  // }

   const villes = [{
     name: "Bruxelles",
     lat: 50.8467035,
     lng: 4.3572889,
     description: "Curabitur eu aliquam libero, nec pellentesque lacus"
 },
 {
     name: "Paris",
     lat: 48.866667,
     lng: 2.333333,
     description: "Curabitur eu aliquam libero, nec pellentesque lacus"
    
 },
 {
     name: "Biarritz",
     lat: 43.4832523,
     lng: -1.5592776,
     description: "Curabitur eu aliquam libero, nec pellentesque lacus"
 }
 ];


  function initMap() {
    // The location of Bruxelles
    // const bruxelles = {lat: 50.8467035, lng: 4.3572889};
    // const paris = {lat: 48.866667, lng: 2.333333};
    // The map, centered at Bruxelles
    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: villes[0]});
    // The marker, positioned at Bruxelles
    // let marker = new google.maps.Marker({position: ville.bruxelles, map: map});
    for( let i=0; i<villes.length; i++){
      const marker = new google.maps.Marker({position:{lat: villes[i].lat, lng: villes[i].lng}, map: map});

    }

    const contentString = 
      '<p><b>Bruxelles</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+ '<p>Nous contacter: CAMPUS MANAGER - François Blondeau : +32493466269' + 
      'Adresse email : francois@wildcodeschool.be</p>';

  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  const marker = new google.maps.Marker({
    position: villes[0],
    map: map,
    title: 'Bruxelles'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  }


  

  