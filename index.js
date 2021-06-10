var languageData = {
  english:{
    menu:[
      "HOME",
      "ABOUT ME",
      "SKILLS",
      "PORTFOLIO",
      "CONTACT ME"
    ],
    homeHeader:{
      header: "Hi! I'm Omar Cocoletzi, a <span class=\"sec-color\">Junior Front End developer</span>, and I like to ",
      likes: ["learn", "solve problems", "work on team" ]
    },
    aboutMe:{
      header: "ABOUT ME",
      paragraph: "I'm passionate about technology. I love to play videogames 🎮, bake my own bread 🥐 and ride on bicycle. 🚴‍♀️"
    },
    skills:{
      header:"SKILLS",
      paragraph: "Proactive frontend developer, hungry for knowledge and capable of work on teams." 
    },
    portfolio:{
      header: "PORTFOLIO",
      projects: [
        "For this project I used JWT user authentication, and Redux to handle state. I implemented the following technologies: "
      ]
    },
    contactMe:{
      header: "CONTACT ME",
      paragraph: "If my profile fits with what you are looking for, do not hesitate on contact me with any of the following ways: "
    }
  },
  spanish:{
    menu:[
      "INICIO",
      "SOBRE MÍ",
      "HABILIDADES",
      "PORTAFOLIO",
      "¡CONTÁCTAME!"
    ],
    homeHeader:{
      header: "¡Hola! Soy Omar Cocoletzi, un <span class=\"sec-color\">Junior Front End developer</span>   y me gusta ",
      likes:[
        "aprender cosas nuevas",
        "resolver problemas",
        "trabajar en equipo",
      ]
    },
    aboutMe:{
      header: "SOBRE MÍ",
      paragraph: "Soy un aficionado de la tecnología. Me gustan los videojuegos 🎮, hacer mi propio pan 🥐 y andar en bicicleta. 🚴‍♀️"
    },
    skills:{
      header:"HABILIDADES",
      paragraph: "Desarrollador frontend proactivo, con hambre de aprendizaje y capacidad de trabajar en equipo." 
    },
    portfolio:{
      header: "PORTAFOLIO",
      projects: [
        "En este proyecto se hizo uso de JWT para la autenticación del usuario, también de Redux para manejo del estado. Se hizo uso de las tecnologías siguientes: "
      ]
    },
    contactMe:{
      header: "CONTACTO",
      paragraph: "Si mi perfil encaja con lo que buscas, no dudes en contactarme por cualquiera de los siguientes métodos: "
    }
  }
};

var _updaters = [changeNavbar, updateHomeSection, updateAboutMe, updateSkills, updatePortfolio, updateContactMe];
// NAVBAR SWITCHER
function changeNavbar(language){
  var navbarItems = document.querySelectorAll("#navbar-list a");
  navbarItems.forEach(function(element, index){
    element.innerHTML=languageData[language].menu[index];
  });
}
// HOME SWITCHER
function changeHeader(language){
  var header = document.querySelector("#home-header-lang");
  header.innerHTML=languageData[language].homeHeader.header;
}
function updateLikeList(language){
  var likeSpan = document.querySelector("#likes");
  var likeList = languageData[language].homeHeader.likes;
  var i = 0;
  function like(){
    i = i===likeList.length-1? 0:i+1;
    likeSpan.innerHTML = likeList[i];
  }
  like();
  return setInterval(like, 2000);
}
var _oldTimer = null;
var _firstTime = true;
function intervalWrapper(language){
  var newTimer = updateLikeList(language);
  if (_firstTime){
    _oldTimer = newTimer;
    _firstTime = false;
  }else{
    clearInterval(_oldTimer);
    _oldTimer = newTimer;
  }
}
function updateHomeSection(language){
  changeHeader(language);
  intervalWrapper(language);
}
// ABOUT ME SWITCHER
function changeAboutMeHeader(language){
  var header = document.querySelector("#aboutme-header");
  header.innerHTML=languageData[language].aboutMe.header;
}
function changeAboutMePar(language){
  var paragraph = document.querySelector("#aboutme-paragraph");
  paragraph.innerHTML = languageData[language].aboutMe.paragraph;
}
function updateAboutMe(language){
  changeAboutMeHeader(language);
  changeAboutMePar(language);
}
// SKILLS SWITCHER
function updateSkills(language){
  var header = document.querySelector("#skills-header");
  header.innerHTML = languageData[language].skills.header;
  var paragraph = document.querySelector("#skills-paragraph");
  paragraph.innerHTML = languageData[language].skills.paragraph;
}
// PORTFOLIO SWITCHER
function updatePortfolio(language){
  var header = document.querySelector("#portfolio-header");
  header.innerHTML = languageData[language].portfolio.header;
  var projects = document.querySelectorAll(".project-description");
  projects.forEach(function(project,index){
    project.innerHTML = languageData[language].portfolio.projects[index];
  });
}
// CONTACT ME SWITCHER
function updateContactMe(language){
  var header = document.querySelector("#contactme-header");
  header.innerHTML = languageData[language].contactMe.header;
  var paragraph = document.querySelector("#contactme-paragraph");
  paragraph.innerHTML = languageData[language].contactMe.paragraph;
}
// PAGE SWITCHER
function updateAllPage(language){
  _updaters.forEach(el=>el(language));
}
var languageSelected = document.querySelector("#language-selected");
var englishBtn = document.querySelector("#english");
var spanishBtn = document.querySelector("#spanish");
englishBtn.addEventListener("click", function(){
  updateAllPage("english");
  languageSelected.innerHTML = this.innerHTML;
});
spanishBtn.addEventListener("click", function(){
  updateAllPage("spanish");
  languageSelected.innerHTML = this.innerHTML;
});

updateAllPage("spanish");

var menuBtn = document.querySelector(".menu-btn");
var menuWrapper = document.querySelector(".menu-wrapper");
menuBtn.addEventListener("click", function(){
  if (this.classList.contains("open")){
    this.classList.remove("open");
    menuWrapper.classList.remove("show");
    return;
  }
  this.classList.add("open");
  menuWrapper.classList.add("show");
});

var selectorUl = document.querySelector("li.nav-item.dropdown-container");
var mySelector = document.querySelector("#language-selector");
selectorUl.addEventListener("click", function(){
  if(mySelector.classList.contains("show")){
    mySelector.classList.remove("show")
    return;
  }
  mySelector.classList.add("show");
});
