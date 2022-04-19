<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>American Horror Story</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="annim.css">
    <link rel="icon" type="image/x-icon" href="image/Illustration.svg">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100&display=swap" rel="stylesheet"> 
    <style>
        @font-face {
          font-family: 'American-Horror-Story';
            src:  url('font/American-Horror-Story.ttf.woff') format('woff'),
            url('font/American-Horror-Story.ttf.svg#American-Horror-Story') format('svg'),
            url('font/American-Horror-Story.ttf.eot'),
            url('font/American-Horror-Story.eot?#iefix') format('embedded-opentype'); 
            font-weight: normal;
            font-style: normal;
        }
        
        </style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>

</head>

<body>

    <div class="endChargement">
        <div class="divChargement">
            <img src="image/illustration.svg" alt="" class="logoChargement">
            <div class="barreBug"></div>
        </div>
    </div>

    <!--HEADER PART-->

    <header>
        <nav class="header">

            <img src="image/Illustration.svg" alt="" class="menuBurger">

            <div class="button__div">
                <div class="search__div">
                    <div class="search__list">
                        <input type="text" class="search__p" placeholder="Search">
                    </div>
                    <button class="search">
                        <img src="image/MagnifyingGlass.svg" alt="" class="recherche">
                    </button>
                </div>
                <button class="burger">
                    <span class="bar"></span>
                </button>
            </div>
        </nav>

        <!--HEADER NAV PART-->
        <section class="nav__page">
            <div class="nav__list">
                <ul class="nav__list__ul">
                    <li class="nav__list__title one h3__mobil"><a class="button__nav__click" href="#about"> About </a></li>
                    <li class="nav__list__title two h3__mobil"><a class="button__nav__click2" href="#creators"> Creators </a></li>
                    <li class="nav__list__title three h3__mobil"><a class="button__nav__click3" href="#seasons"> Seasons </a></li>
                    <li class="nav__list__title four h3__mobil"><a class="button__nav__click4" href="#awards"> Awards </a></li>
                </ul>
            </div>

        </section>

    </header>

    <section class="OneEpisode"></section>

    <!--ABOUT PART-->

    <section class="about__sect">
        
        <div class="ctn_canvas">
            <canvas id="canvas"></canvas>
        </div>


        <h1 class="title__header">American horor story</h1>
        <div class="footer__title">
            <img src="image/LogoNetflix.svg" alt="">
            <div class="switch switch-on">
                <div class="finger"></div>
            </div>
        </div>

        <article class="about__art">
            <scroll-page id="about"></scroll-page>
            <h2 class="h1__mobil title"> About</h2>
            <p class="p__about p__mobil">An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, a sla.</p>
        </article>

        <article class="creators__art">
            <scroll-page id="creators"></scroll-page>
            <h2 class="h1__mobil title">Creators</h2>
            <p class="p__creators p__mobil">Ryan Murphy and Brad Falchuk, following their meeting, submitted, in 2008, the pilot of Pretty/Handsome. However, it was not selected by FX. The duo sought a lighter subject to collaborate on and teamed up with Ian Brennan, who had just completed a script about a high school choir. Their TV creation, called Glee, quickly gained popularity and ran for six consecutive seasons. Meanwhile, Brad Falchuk and Ryan Murphy launched American Horror Story. This horrific anthology was both a critical and public success in its first season.</p>
        </article>
    </section>

    <section class="ctn__oneEpisode">
        <div class="one__episode">

        </div>
    </section>

    <!--SEASONS PART-->

    <section class="serie__sect">
        <scroll-page id="seasons"></scroll-page>

        <div class="saison__div">
            <h2 class="h1__mobil title flex__cancell" id="titleGlobal">Seasons</h2>
            <ul class="saison__list" >

                <li class="saison__item">
                    <hr> 
                    <ul class="episode__list">


                    </ul>
                </li>

            </ul>
        </div>
    </section>

    <!--AWARDS PART-->

    <section class="awards__sect">
        <scroll-page id="awards"></scroll-page>

        <h1 class="awards__title h1__mobil">Awards</h1>
        <div class="awards__1">
            <h3 class="awards__number">16</h3>
            <h4 class="awards__text h3__mobil">Primetime Emmys</h4>
        </div>
        <div class="awards__2">
            <h3 class="awards__number">389</h3>
            <h4 class="awards__text h3__mobil">Nominations</h4>
        </div>
        <div class="awards__3">
            <h3 class="awards__number">128</h3>
            <h4 class="awards__text h3__mobil">Wins</h4>
        </div>
    </section>
    <section class="episode__sect"></section>

    <!-- SEARCH PART -->
    <section class="episode__search">

    </section>

    <!--FOOTER PART-->

    <footer class="footer">
        <hr>
        <div class="footer__div">
            <h5 class="testfooter  p__mobil"> <a class="testagrr" href="https://www.facebook.com/americanhorrorstory/" target="_blank"> Facebook</a></h5>
            <h5 class="testfooter instagram p__mobil"> <a class="testagrr" href="https://www.instagram.com/ahsfx/ " target="_blank"> Instagram </a></h5>
            <h5 class="testfooter twitter p__mobil"> <a class="testagrr" href="https://twitter.com/ahsfx/ " target="_blank"> Twitter </a></h5>
            <h5 class="testfooter c2022 p__mobil">©2022</h5>
        </div>
    </footer> 


<!-- TEMPLATE EPISODE -->

<template id="oneEpisode">
    <div>
        <div class="header__header_img">
            <div class="header__img">
            <img class="img__template" src="{{img}}">
            </div>
        </div>
        <!-- croix -->
        <div class="div__close__button" >
            <img class="image__close__button" id="quitEpisode" src="image/Close Button mobile.svg" alt="">
        </div>
        <div class="nav__fleche">
            <img src="image/Flèche gauche.svg" alt="" class="moins">

            <img src="image/Flèche droite.svg" alt="" class="plus">
        </div>
    </div>
    <div>
        <section class="section__under__img">
            <div class="div__head__episode">
            <h2 class="h4__mobil h2__template h2__episode">Episode {{nb}}</h2>
            <h2 class="h5__mobil h2__template">{{titre}}</h2>
            </div>
            <div class="div__body__episode">
                
                <div class="div__season__episode">
                    <select class="select__class h4__mobil" name="pets" id="season-select">
                        <option class="option__select__class" value="" selected>Seasons {{nbSeason}}</option>
                        
                    </select>
                </div>
                <h3 class="h5__mobil h3__template">{{year}}</h3>
                <h3 class="h5__mobil h3__template">{{rated}}</h3>
                <h3 class="h5__mobil h3__template">{{time}}</h3>
            </div>
        
            <p class="p__mobil text__p__template">{{text}}</p>

        <div class="rate__review">
            <h3 class="h5__mobil space__template">{{note}}</h3>
            <h3 class="h5__mobil space2__template">{{reviews}} votes</h3>
        </div>
        </section>

        <section>
            

                <ul>
                    <hr>
                    <li class="flex__row">
                        <h3 class="h4__mobil space__template">Director</h3>
                        <h3 class="h5__mobil space2__template">{{director}}</h3>
                    </li>


                    <hr>
                    <li class="flex__row">
                        <h3 class="h4__mobil space__template">Writers</h3>
                        <h3 class="h5__mobil space2__template">{{writers}}</h3>
                    </li>

                    
                    <hr>
                    <li class="flex__row">
                        <h3 class="h4__mobil space__template">Actors</h3>
                        <h3 class="h5__mobil space2__template">{{actors}}</h3>
                    </li>
                    
                    <hr>
                    <li class="flex__row">
                        <h3 class="h4__mobil space__template">Genre</h3>
                        <h3 class="h5__mobil space2__template">{{genre}}</h3>
                    </li>

                    <hr>
                    <li class="flex__row">
                        <h3 class="h4__mobil space__template">Language</h3>
                        <h3 class="h5__mobil space2__template">{{language}}</h3>
                    </li>

                    <hr>
                    <li class="flex__row">
                        <h3 class="h4__mobil space__template">Country</h3>
                        <h3 class="h5__mobil space2__template">{{country}}</h3>

                    </li>
                    
                </ul>





        </section>
    </div>



</template>

<!-- TEMPLATE OPTION INPUT SEASON -->
<template id="optionInput">
    <option class="option__select__class" value="{{ep1}}" >Season {{season}}</option>
</template>



<!-- TEMPLATE SEASONS -->
    <template id="listSeason">
        <h3 class="h4__mobil" data-nbseason="{{nbSeason}}">Season {{nbSeason}} <span class="h5__mobil" data-nbseason="{{nbSeason}}">{{title}}</span></h3>
        <div class="listEpisodesSeason{{nbSeason}} listEpisodesSeasonX"></div>
        <hr>
    </template>

<!-- TEMPLATE INFO SAISON (descriptio + chrono + note + wiki) -->
    <template id="infoSeason">
        <p class="p__mobil info__saison">{{plot}}</p>
        <span class="h4__mobil" data-ordre="chrono" data-nbseason="{{nbSeason}}">Chronologie </span>|<span class="h4__mobil" data-ordre="note" data-nbseason="{{nbSeason}}"> Note </span>| <a class="h4__mobil" href="https://fr.wikipedia.org/wiki/Saison_{{nbSeason}}_d%27American_Horror_Story">More infos +</a>
    </template>

<!-- TEMPLATE LISTE EPISODE-->

    <template id="listEpisode">
        <hr class="margin__episode">

        <h4 class="h4__mobil margin__episode" data-id="{{id}}">Episode {{nb}} <span class="h5__mobil span__space" data-id="{{id}}">{{titre}}</span></h4> 
    </template>

<!-- TEMPLATE RESULTAT RECHERCHEZ NOTE -->
<template id="listSearchEpisode">
    <div class="div__Episode__Search">
        <div class="div__ep__saison">
            <h2 class="h2__padding h4__mobil" data-id="{{id}}">Episode {{nb}}</h2>
            <h4 class="h4__mobil" data-id="{{id}}">Season {{nbSeason}}</h4>
        </div>
        <div class="div__nom__note">
            <h3 class="h3__padding h5__mobil" data-id="{{id}}">{{titre}}</h3>
            <div class="note__reviews">
                <h5 class="note__space h5__mobil" data-id="{{id}}">{{note}}</h5>
                <h5 class="review__space h5__mobil" data-id="{{id}}">{{reviews}} reviews</h5>
            </div>
        </div>
    </div>
    <hr>
</template>

    <script src="js/script2.js"></script>
    <script src="js/script-anex.js"></script>
    <script src="js/dataLocal.js"></script>


</body>
</html>
