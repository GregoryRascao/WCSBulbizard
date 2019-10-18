
// -------------------------------------------
// --------------Antoine----------------------
// -------------------------------------------


function searchWilder(){
    let siteSearch = document.getElementById("siteSearch"); 
    let surf = siteSearch.value;
    alert(surf);
}

// -------------------------
// ---------GREG--------------
// --------------------------

let Personnage = [{
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
    escription: 'Musique et programmation font un duo et c’est ce qu’a voulu Dinu. C’est aux rythme de la musique qu’il code de façon magistral.',
    image: "photos-individuelles/Dinu.png",
},
{
    name : 'Charles-Elie',
    job: 'Développeur Web Junior',
    description: 'Amis de l’ordinateur, il affronte les problèmes avec sourire et détermination.',
    image: "photos-individuelles/Charles-Elie.png",
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


function tropBien (Personne){
    for (let i=0; i < Personnage.length; i++){
        let people = document.getElementsByClassName("timeline-heading");
        people[i].innerHTML = '<h3>'+Personnage[i].name+"</h3><h4>"+Personnage[i].job+"</h4><p>"+Personnage[i].description+"</p>";
        console.log(Personnage[i].name);
        let imag = document.getElementsByClassName("pres");
        imag[i].innerHTML = `${'<img src="'+Personnage[i].image+'">'}`;
    }
}
tropBien();

