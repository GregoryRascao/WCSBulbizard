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
    const contentString = '<div id="content"><h1>Golden Gate Bridge</h1><p>The Golden Gate Bridge is a' +
				'suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San' +
				'Francisco Bay and the Pacific Ocean. The structure links the American city of San Francisco,' +
				'California - the northern tip of the San Francisco Peninsula - to Marin County, carrying' +
				'both U.S. Route 101 and California State Route 1 across the strait. The bridge is one of' +
				'the most internationally recognized symbols of San Francisco, California, and the United States.' +
				'It has been declared one of the Wonders of the Modern World by the American Society of Civil' +
				'Engineers.</p><p>Attribution: Golden Gate Bridge <a href="https://en.wikipedia.org/wiki/Golden_Gate_Bridge">' +
				'https://en.wikipedia.org/wiki/Golden_Gate_Bridge</a></p></div>';

			const infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
  }

  

  