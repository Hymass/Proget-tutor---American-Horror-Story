function toggleMenu () {  
    const navbar = document.querySelector('.nav__list');
    const burger = document.querySelector('.burger');
    let body = document.querySelector('body');

    burger.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
      body.classList.toggle('bodystuck');
    });    
  }
  toggleMenu();


  function toggleMenuSearch () {  
    const navbarsearch = document.querySelector('.search__list');
    const burgersearch = document.querySelector('.search');
    const navbarp = document.querySelector('.search__p')

    burgersearch.addEventListener('click', (e) => {
      navbarsearch.classList.toggle('show-search');
    });
  }
  toggleMenuSearch();


  function toggleMenuNav () {  
    const navbutton = document.querySelector('.button__nav__click');
    let body = document.querySelector('body');
    const navbar = document.querySelector('.nav__list');

    navbutton.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
      body.classList.toggle('bodystuck');
    });
  }
  toggleMenuNav();

  function toggleMenuNav2 () {  
    const navbutton = document.querySelector('.button__nav__click2');
    let body = document.querySelector('body');
    const navbar = document.querySelector('.nav__list');

    navbutton.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
      body.classList.toggle('bodystuck');
    });
  }
  toggleMenuNav2();

  function toggleMenuNav3 () {  
    const navbutton = document.querySelector('.button__nav__click3');
    let body = document.querySelector('body');
    const navbar = document.querySelector('.nav__list');

    navbutton.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
      body.classList.toggle('bodystuck');
    });
  }
  toggleMenuNav3();

  function toggleMenuNav4 () {  
    const navbutton = document.querySelector('.button__nav__click4');
    let body = document.querySelector('body');
    const navbar = document.querySelector('.nav__list');

    navbutton.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
      body.classList.toggle('bodystuck');
    });
  }
  toggleMenuNav4();



function initSwitch(){
    let darkMode = document.querySelector(".switch");
    darkMode.addEventListener("click", toggleSwitch)
}

function toggleSwitch () {
    let etat = document.querySelector(".switch");
    etat.classList.toggle("switch-on");
    etat.classList.toggle("switch-off");
    changeColor()
}

function changeColor (){
    let etat = document.querySelector(".switch");
    let r = document.querySelector(':root');
    let images = document.querySelector('.menuBurger')
    let search = document.querySelector('.recherche')
    let close = document.querySelector('.image__close__button')
    let moins = document.querySelector('.moins')
    let plus = document.querySelector('.plus')

    let canvas = document.querySelector('canvas')

    if(etat.classList[1] == "switch-off"){
      r.style.setProperty('--RougeP', '#161616');
      r.style.setProperty('--RougeV', '#E7E7E7');
      images.src = ('image/IllustrationWhite.svg');
      search.src = ('image/Magnifying Glass White.svg');
      close.src = ('image/CloseButtonWhite.svg');
      moins.src = ('image/Flèche gauche white.svg');
      plus.src = ('image/Flèche droite white.svg');
      canvas.style.opacity = "100%"

    }
    else{
      r.style.setProperty('--RougeP', '#5D0A14');
      r.style.setProperty('--RougeV', '#FF002E');
      images.src = ('image/Illustration.svg');
      search.src = ('image/MagnifyingGlass.svg');
      close.src = ('image/Close Button mobile.svg');
      moins.src = ('image/Flèche gauche.svg');
      plus.src = ('image/Flèche droite.svg');
      canvas.style.opacity = "0%"
    }
    
}
initSwitch()




$(document).ready(function(){
  $(".awards__number").counterUp({
    delay: 10,
    time:1200
  });
});

/* load */
function change(){
  let chargement = document.querySelector(".endChargement")
  chargement.classList.toggle("end");
}

function changeSeason(e){
  idEp = e.target.value
  if(idEp != undefined){
    C.getLocalDataEpisode(idEp, "non")
  }
}


function quitEpisode(){
  let listEp = document.querySelector(".one__episode");
  console.log(listEp)
  listEp.classList.toggle('appear')
  C.getDataSeason("menu");
}

/* canvas */
var App = {
  canvas: undefined,
  ctx: undefined,

  init: function(id1, id2, id3){
      App.loadImg(id1, id2, id3)
  },

  loadImg: function(id1, id2, id3){
      let nbImg = 0;

      App.img1 = new Image();
      App.img1.addEventListener('load', ()=>{
          nbImg++
          App.checkLoad(nbImg)
      }, {once:true});
      App.img1.src = id1;

      App.img2 = new Image();
      App.img2.addEventListener('load', ()=>{
          nbImg++
          App.checkLoad(nbImg)
      }, {once:true});
      App.img2.src = id2;

      App.img3 = new Image();
      App.img3.addEventListener('load', ()=>{
          nbImg++
          App.checkLoad(nbImg)
      }, {once:true});
      App.img3.src = id3;

      
  },

  checkLoad: function(nb){
      if(nb == 3){
          App.initView();
          App.render();
      }
  },

  initView: function(){
      App.canvas = document.getElementById("canvas");
      App.ctx = App.canvas.getContext('2d');
      App.canvas.width = window.innerWidth;
      App.canvas.height = window.innerHeight;

  },

  randomParticules: function(){
      let caracImg = []
      let img = Math.floor(Math.random() * 3);
      if(img == 0){
          caracImg.source = App.img1
      }
      else if(img == 1){
          caracImg.source = App.img2
      }
      else{
          caracImg.source = App.img3
      }

      let valeurH = App.randomSigne()
      caracImg.valeurH = valeurH;

      let valeurW = App.randomSigne()
      caracImg.valeurW = valeurW;

      let positionW = Math.floor((Math.random() * caracImg.valeurW*10)+2)
      caracImg.positionW = positionW

      let positionH = Math.floor((Math.random() * caracImg.valeurH*10)+2)
      caracImg.positionH = positionH

      return caracImg
  },

  randomSigne: function(){
      let valeur = Math.floor(Math.random() * 2);
      if(valeur == 0){
          return "-1"
      }
      else{
          return "1"
      }
  },

  render: function(){
      App.ctx.translate(App.canvas.width/2, App.canvas.height/2);
      for(let i=1; i<25; i++){
          rdm = App.randomParticules()
          App.ctx.drawImage(rdm.source, App.canvas.width/rdm.positionW, App.canvas.height/rdm.positionH);
      }
  }

}

App.init("image/p1.png", "image/p2.png", "image/p3.png")