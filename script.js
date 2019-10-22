
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
    window.scrollTo(0, 770);
};
 function scrollFunction2() {
    window.scrollTo(0, 1394);
};
 function scrollFunction3() {
    window.scrollTo(0, 5000);
};
 function scrollFunction4() {
    window.scrollTo(0, 350,);
};
//Dinu Fin


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
    lng: 4.3572889
 },
 {
    name: "Paris",
    lat: 48.866667,
    lng: 2.333333
 },
 {
    name: "Biarritz",
    lat: 43.4832523,
    lng: -1.5592776
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
 const newMessages = [{
  ville: '<p><b>Bruxelles</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  'sandstone rock formation in the southern part of the '+
  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  'south west of the nearest large town, Alice Springs; 450&#160;km '+
  '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  'Aboriginal people of the area. It has many springs, waterholes, '+
  'rock caves and ancient paintings. Uluru is listed as a World '+
  'Heritage Site.</p>'+ '<p>Nous contacter: CAMPUS MANAGER - François Blondeau : +32493466269' +
  'Adresse email : francois@wildcodeschool.be</p>'
 },
 {
  ville: '<p><b>Paris</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  'sandstone rock formation in the southern part of the '+
  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  'south west of the nearest large town, Alice Springs; 450&#160;km '+
  '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  'Aboriginal people of the area. It has many springs, waterholes, '+
  'rock caves and ancient paintings. Uluru is listed as a World '+
  'Heritage Site.</p>'+ '<p>Nous contacter: CAMPUS MANAGER - François Blondeau : +32493466269' +
  'Adresse email : francois@wildcodeschool.be</p>'
 },
 {
  ville: '<p><b>Biarritz</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  'sandstone rock formation in the southern part of the '+
  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  'south west of the nearest large town, Alice Springs; 450&#160;km '+
  '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  'Aboriginal people of the area. It has many springs, waterholes, '+
  'rock caves and ancient paintings. Uluru is listed as a World '+
  'Heritage Site.</p>'+ '<p>Nous contacter: CAMPUS MANAGER - François Blondeau : +32493466269' +
  'Adresse email : francois@wildcodeschool.be</p>'
 }
 ];
  for (let i = 0; i < newMessages.length; ++i) {
    const marker = new google.maps.Marker({position:{lat: villes[i].lat, lng: villes[i].lng}, map: map});
    attachNewMessages(marker, newMessages[i].ville);
  }
 }
 function attachNewMessages(marker, newMessages) {
  const infowindow = new google.maps.InfoWindow({
    content: newMessages
  });
  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
  setTimeout(function () { infowindow.close(); }, 5000);
 }


// -------------------------
// ---------GREG--------------
// --------------------------

let wilders = [{
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


const profileWilder = document.getElementById ("students");


renderNormalContainer = (normal) => {

   
        const normalContainer = `
    <div class="timeline-panel-container">
        <div class="timeline-panel">
        <div class="timeline-heading"><h3>${normal.name}</h3><h4>${normal.job}</h4><p>${normal.description}</p></div>
        <div class="pres">${'<img src="'+normal.image+'">'}</div>
    </div>
    </div> 
    `
    return normalContainer;

}

renderInverseContainer = (inverse) => {
    const inverseContainer = `
    <div class="timeline-panel-container-inverted">
        <div class="timeline-panel-reverse timeline-panel">
        <div class="timeline-heading"><h3>${inverse.name}</h3><h4>${inverse.job}</h4><p>${inverse.description}</p></div>
        <div class="pres">${'<img src="'+inverse.image+'">'}</div>
    </div>
    </div>
    `;
    return inverseContainer;    
}

renderWildersComponent = (list) => {
    for (let i = 0; i < (list.length); i++){
        let component = `
        <li>${renderNormalContainer(list[i])}</li>
        <li>${renderInverseContainer(list[i])}</li>
    `
    if (i%2){
        let componentImpar = `<li>${renderInverseContainer(list[i])}</li>`
        profileWilder.insertAdjacentHTML('beforeend', componentImpar);
        } else{
        let componentPar = `<li>${renderNormalContainer(list[i])}</li>`
        profileWilder.insertAdjacentHTML('beforeend', componentPar);
        }
    }
}

renderWildersComponent(wilders);


// -------------------------------------------
// --------------Antoine----------------------
// -------------------------------------------


function searchWilder(){
    let siteSearch = document.getElementById("siteSearch"); 
    let surf = siteSearch.value;
    return surf;
}

var filterWilders = () =>{
    wilders.filter(function(wilder){
        let name = searchWilder();
        if(wilder.name === name){
            profileWilder.innerHTML = `<li>${renderNormalContainer(wilder)}</li>`;
            return wilder;
        }
        return;     
    });
}
