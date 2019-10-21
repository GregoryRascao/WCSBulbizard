
// Dinu START
// 1 - Click on "Formateur"
        
// 2 - Find position of formateur on the page
//  function position(test) {
// var test = document.getElementById("Wild");
// console.log(test.offsetTop)
//  } 
// position(); 
 
// 3 - Scroll the window to this postion with javascript
function scrollFunction1() {
    window.scrollTo(0, 820);}

function scrollFunction2() {
    window.scrollTo(0, 1444);}

function scrollFunction3() {
    window.scrollTo(0, 5000);}
function scrollFunction4() {
    window.scrollTo(0, 400,);}
//Dinu Fin


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

  

  

// -------------------------
// ---------GREG--------------
// --------------------------
function showPersons (name, job, description, image){
let person = [{
    name: "William" ,
    job: "Développeur Web Junior",
    description: "Développer dans l’âme,  il aime l’ordinateur et s’en sert avec talent !",
    image: "photos-individuelles/William.png"
},  
{
    name: "Sydney",
    job: "Développeur Web Junior",
    description: "Champion du hackathon 2019, il affronte de long projet sans crainte. Il ira loin ce petit !",
    image: "photos-individuelles/Sydney.png",
},
{
    name : 'Steve',
    job: 'Développeur Web Junior',
    description: 'Ses pauses lui permettes de faire le points et de revenir des idées pleins la tête. Découvrez son savoir dans le domaine de la programmation.',
    image: "photos-individuelles/Steve.png",
 },
 {
    name : 'Pierre',
    job: 'Développeur Web Junior',
    description: 'Nouveau logement, nouveau départ. C’est avec Zénitude qu’il vous entraîne dans son univers fabuleux du web développer.',
    image: "photos-individuelles/Pierre.png",
},
{
    name : 'Nicolas',
    job: 'Développeur Web Junior',
    description: 'Bon combattant, il terrasse la langage HTML et CSS pour vous offrir un rendu parfait.',
    image: "photos-individuelles/Nicolas.png",
},
{
    name : 'Maxime',
    job: 'Développeur Web Junior',
    description: 'Déjà avancé dans le domaine, il partage, participe et parle de ses connaissances.',
    image: "photos-individuelles/Maxime.png",
},
{
    name : 'Marine',
    job: 'Développeur Web Junior',
    description: 'Ne vous fiez pas aux apparences. Sa discrétions cache un talent hors du commun.',
    image: "photos-individuelles/Marine.png",
},
{
    name : 'Gregory',
    job: 'Développeur Web Junior',
    description: 'Un français pas comme les autres. Il aime partager sa passion de la programmation. Rien ne lui échappe.',
    image: "photos-individuelles/Gregory.png",
},
{
    name : 'Ghislain',
    job: 'Développeur Web Junior',
    description: 'Son humour jour avec sa programmation. Plongez-vous dans son monde pour découvrir une personne pleine de ressources.',
    image: "photos-individuelles/Ghislain.png",
},
{
    name : 'Dinu',
    job: 'Développeur Web Junior',
    description: 'Musique et programmation font un duo et c’est ce qu’a voulu Dinu. C’est aux rythme de la musique qu’il code de façon magistral.',
    image: "photos-individuelles/Dinu.png",
},
{
    name : 'Charles-Elie',
    job: 'Développeur Web Junior',
    description: 'Amis de l’ordinateur, il affronte les problèmes avec sourire et détermination.',
    image: "photos-individuelles/Charles-Ilie.png",
},
{
    name : 'Benoit',
    job: 'Développeur Web Junior',
    description: 'Il a toujours voulu proposer son aide à quiconque le souhaites. Il apprend la programmation avec calme et sérénitude.',
    image: "photos-individuelles/Benoit.png",
},
{
    name : 'Astrid',
    job: 'Développeur Web Junior',
    description: 'La maman de la formation, à l’écoute, réactive. C’est avec sa joie de vivre qu’elle combat les démon de git.',
    image: "photos-individuelles/Astrid.png",
},
{
    name : 'Antoine',
    job: 'Développeur Web Junior',
    description: 'Nouveau dans le domaine, il apprend lentement mais surement !',
    image: "photos-individuelles/Antoine.png",
},
{
    name : 'Marouan',
    job: 'Développeur Web Junior',
    description: "Wilder à tout faire. Il gère chaque language d'une main de maitre",
    image: "photos-individuelles/Marouan.jpeg",
}
];
    for (let i=0; i < person.length; i++){
        let people = document.getElementsByClassName("timeline-heading");
        people[i].innerHTML = '<h3>'+person[i].name+"</h3><h4>"+person[i].job+"</h4><p>"+person[i].description+"</p>";
        let imag = document.getElementsByClassName("pres");person
        imag[i].innerHTML = `${'<img src="'+person[i].image+'">'}`;
    }
    
}
showPersons();
// -------------------------------------------
// --------------Antoine----------------------
// -------------------------------------------


function searchWilder(){
    let siteSearch = document.getElementById("siteSearch"); 
    let surf = siteSearch.value;
    alert(surf);
}
    

const displayPerson = personnages.filter(function(personne){
    return hero.franchise == “”;
});
//1 Filtrer array Personnages and returnn an array

