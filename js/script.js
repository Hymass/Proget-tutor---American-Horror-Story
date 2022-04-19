let M = {};

M.allEpisodes = []; //toutes les données de tous les épisodes

M.allSeasons = []; //toutes les données de toutes les saisons

M.nbSeason = 0; //nombre de saison

M.nbRequettes = 0; //nombre de requettes

let C = {};

C.init = function() {
    V.init();
    C.getAllData();
}

//Cible l'élément sur lequel on viens de cliquer et récupère son data-id
C.getData = function(e) {
    let data = e.target.dataset.ordre;
    if (data != undefined) {
        let season = e.target.dataset.nbseason
        C.OrdreEpisodes(data, season);
    } else {
        data = e.target.dataset.id; 
        if (data != undefined) {
            C.getLocalDataEpisode(data)
        } else {
            data = e.target.dataset.action
            if(data != undefined){
            C.getDataSeason(data);
            } else {
                data = e.target.dataset.nbseason
                C.getAllEpisodes(data);
                //V.renderInfoSeason(M.allSeasons[data])
                
            }
        }
    }
}

C.getLocalDataEpisode = function(data, r) {
    console.log("data : "+data)
    max = M.allEpisodes.length; //nombre d'épisodes stoké sur notre variable locale
    for (let i = 0; i < max; i++) {
        if (M.allEpisodes[i].imdbID == data) { //si on retrouve l'id dans un des épisode
            C.clearDiv();
            V.renderOneEpisode(M.allEpisodes[i], r) //mise en forme des données
            for(let i=1; i<M.allSeasons[1].totalSeasons - 1; i++){
                V.renderOptionInut(i)
            }
        }
    }
}

C.getAllData = function() {
    if (M.nbSeason > 0) {
        for (let i = 1; i < M.nbSeason - 1; i++) {
            V.renderSeason(M.allSeasons[i])
        }
    } else {
        let fini = 1;
        let total = 0;
        let s = new XMLHttpRequest();

        s.open("GET", 'https://www.omdbapi.com/?t=American%20Horror%20Story&apikey=7dd6434e');


        s.addEventListener('load', function() {
            let eObj = JSON.parse(s.responseText);
            M.nbRequettes++;
            M.nbSeason = eObj.totalSeasons;
            let fini = 0;
            
            for (let i = 1; i < eObj.totalSeasons - 1; i++) {
                
            
                let one = new XMLHttpRequest();

                one.open("GET", 'https://www.omdbapi.com/?t=American%20Horror%20Story&Season=' + i + '&apikey=7dd6434e');


                one.addEventListener('load', function() {
                    let obj = JSON.parse(one.responseText);
                    M.nbRequettes++;
                    M.allSeasons[i] = obj;
                    total += obj.Episodes.length

                    for(let j = 1; j<=M.allSeasons[i].Episodes.length; j++){
                        let ep = new XMLHttpRequest();

                        ep.open("GET", 'https://www.omdbapi.com/?t=American%20Horror%20Story&Season=' + i + '&Episode=' + j + '&apikey=7dd6434e');

                        ep.addEventListener('load', function() {
                            let nbEp = JSON.parse(ep.responseText);
                            M.nbRequettes++;
                            let last = M.allEpisodes.length;
                            M.allEpisodes[last] = nbEp;
                            if(fini == total-1){
                            change()
                            C.getDataSeason("menu");
                        }
                        fini++
                        })
                        ep.send();

                    }
                })

                one.send();
            }
        })
        s.send();
    }
},

C.resultEpisodes = function(){
    let reset = document.querySelector(".episode__search")
    reset.innerHTML = ""

    note = document.querySelector('.search__p').value
    console.log(note)
    if(note != ""){

        let sect = document.querySelector(".about__sect");
        sect.style.display = "none"

        let awards = document.querySelector(".awards__sect");
        awards.style.display = "none"

        let header = document.querySelector(".nav__page")
        header.style.display = "none";

        let footer = document.querySelector("footer")
        footer.style.display = "none";

        let title = document.querySelector("#titleGlobal")
        title.textContent = "";

        let tabNotes = [];
        for(let i = 0; i<M.allEpisodes.length; i++){
            if(M.allEpisodes[i].imdbRating > note && M.allEpisodes[i].imdbRating != "N/A"){
                tabNotes[tabNotes.length] = M.allEpisodes[i]
            }
        }
        tabNotes.sort((a, b) => b.imdbRating - a.imdbRating);
        C.clearDiv();
        for(let i=0; i<tabNotes.length; i++){
            V.renderListEpisode(tabNotes[i], "recherche")
        }
    }
}

C.OrdreEpisodes = function(e, season){
    console.log("ordre")
    let tabNotes = [];
    for(let i = 0; i<M.allEpisodes.length; i++){
        if(M.allEpisodes[i].Season == season){
            tabNotes[tabNotes.length] = M.allEpisodes[i]
            if(tabNotes[tabNotes.length-1].imdbRating == "N/A"){
                tabNotes[tabNotes.length-1].imdbRating = "0";
            }
        }
    }

    if(e == "note"){
        tabNotes.sort((a, b) => b.imdbRating - a.imdbRating);
        C.resetListEpisodes(season);
        V.renderInfoSeason(M.allSeasons[season])
        for(let i=0; i<tabNotes.length; i++){
            V.renderListEpisode(tabNotes[i])
        }
    }
    else{
        C.resetListEpisodes(season);
        for(let i=0; i<tabNotes.length; i++){
            C.getAllEpisodes(season);
        }
    }
}

C.getDataSeason = function(nb){
    

    let sect = document.querySelector(".about__sect");
    sect.style.display = "block"

    let awards = document.querySelector(".awards__sect");
    awards.style.display = "block"

    let nav = document.querySelector(".nav__page")
    nav.style.display = "block";

    let footer = document.querySelector("footer")
    footer.style.display = "block";

    let title = document.querySelector("#titleGlobal")
    title.textContent = "Season";

    listEp = document.querySelector(".episode__search");
    listEp.innerHTML = ""


    let header = document.querySelector("header")
    header.style.display = "block";
    C.clearDiv();
    if(nb != undefined  && typeof nb == "number"){
        V.renderSeason(M.allSeasons[nb]); 
    }
    else if(nb == "menu"){
        for(let i=1; i<M.allSeasons.length; i++){
            V.renderSeason(M.allSeasons[i]); 
        }
    }
}

C.clearDiv = function(){
    let listEp = document.querySelector(".episode__list");
    listEp.innerHTML = "";
}

C.getAllEpisodes = function(e) {
    C.resetListEpisodes(e)
    let max = M.allSeasons[e].Episodes.length;
    V.renderInfoSeason(M.allSeasons[e])
    for (let i = 0; i < max; i++) {
        C.getEp(e, M.allSeasons[e].Episodes[i].Episode);
    }

}

C.resetListEpisodes = function(max){
    let maxReset = M.allSeasons[max].totalSeasons - 1;
    for (let i = 1; i < maxReset; i++) {
        let listEp = document.querySelector(".listEpisodesSeason" + i);
        listEp.innerHTML = "";
    }
}

C.getEp = function(s, e) { //récupère les données des épisodes d'un saison et les incrémentes un à un dans la div avec la class episodes grace à la fonction V.renderEp

    let max = M.allEpisodes.length;
    let idEpisode;
    for (let i = 0; i < max; i++) {
        if (M.allEpisodes[i].Episode == e && M.allEpisodes[i].Season == s) {
            idEpisode = i;
            V.renderListEpisode(M.allEpisodes[idEpisode]);
        }
    }
}


let V = {};

V.init = function() { //récupère les données d'une saison (principalement le nombre d'épisodes)
    let season = document.querySelector(".episode__list");
    season.addEventListener("click", C.getData)

    let home = document.querySelector(".menuBurger");
    home.addEventListener("click", () => {
        C.getDataSeason("menu")
    })

    let search = document.querySelector(".recherche");
    search.addEventListener("click", C.resultEpisodes)

    let renderSearch = document.querySelector(".episode__search")
    renderSearch.addEventListener("click", C.getData)
}

V.renderInfoSeason = function(e){
    let template = document.querySelector("#infoSeason");
    let html = template.innerHTML;

    html = html.replace("{{plot}}", M.dataLocalSeason[e.Season].Resume);
    html = html.replace("{{nbSeason}}", e.Season);
    html = html.replace("{{nbSeason}}", e.Season);
    html = html.replace("{{nbSeason}}", e.Season);

    let saison = document.querySelector(".listEpisodesSeason" + e.Season);
    saison.innerHTML = html+saison.innerHTML;
}

V.renderSeason = function(e) {
    let template = document.querySelector("#listSeason");
    let html = template.innerHTML;

    if(M.dataLocalSeason[e.Season] == undefined){
        html = html.replace("{{title}}", "");
        html = html.replace("{{desc}}", "");
    }
    else{
        html = html.replace("{{title}}", "- "+M.dataLocalSeason[e.Season].Title);
        html = html.replace("{{desc}}", M.dataLocalSeason[e.Season].Resume);
    }
    html = html.replaceAll("{{nbSeason}}", e.Season);
    html = html.replace("{{title}}", M.dataLocalSeason[e.Season].Title);

    let saison = document.querySelector(".episode__list");
    saison.innerHTML += html;
}

V.renderListEpisode = function(e, rule) {
    let template = document.querySelector("#listEpisode");
    if(rule == "recherche"){
        template = document.querySelector("#listSearchEpisode");
    }
    let html = template.innerHTML;
    let note = e.imdbRating+"/10"
    if(e.imdbRating == "N/A" || e.imdbRating == "0"){
        note = "non noté"
    }

    html = html.replaceAll("{{id}}", e.imdbID);
    html = html.replace("{{nb}}", e.Episode);
    html = html.replace("{{s}}", e.Season);
    html = html.replace("{{titre}}", e.Title);
    html = html.replace("{{date}}", e.Released);
    html = html.replace("{{note}}", note);
    html = html.replaceAll("{{nbSeason}}", e.Season);
    html = html.replaceAll("{{reviews}}", e.imdbVotes)

    let listEp = document.querySelector(".listEpisodesSeason" + e.Season);
    if(rule == "season"){
        listEp = document.querySelector(".episode__list");
    }
    else if(rule == "recherche"){
        listEp = document.querySelector(".episode__search");

    }
    listEp.innerHTML += html;
}

V.renderOneEpisode = function(e, r) {
    let listEp = document.querySelector(".one__episode");
    listEp.innerHTML = "";
    if(r == undefined){
        listEp.classList.toggle('appear')
    }
    

    let template = document.querySelector("#oneEpisode");
    let html = template.innerHTML;
    let note = e.imdbRating+"/10"



    if(e.imdbRating == "N/A" || e.imdbRating == "0"){
        note = "non noté"
    }
    html = html.replace("{{nb}}", e.Episode);
    html = html.replace("{{titre}}", e.Title);
    html = html.replace("{{date}}", e.Released);
    html = html.replace("{{rated}}", e.Rated);
    html = html.replace("{{note}}", note);
    html = html.replace("{{reviews}}", e.imdbVotes);
    html = html.replace("{{img}}", e.Poster);
    html = html.replace("{{text}}", e.Plot);
    html = html.replace("{{time}}", e.Runtime);
    html = html.replace("{{genre}}", e.Genre);
    html = html.replace("{{actors}}", e.Actors);
    html = html.replace("{{year}}", e.Year);
    html = html.replace("{{director}}", e.Director);
    html = html.replace("{{writers}}", e.Writer);
    html = html.replace("{{language}}", e.Language);
    html = html.replace("{{country}}", e.Country);
    html = html.replaceAll("{{nbSeason}}", e.Season);

    listEp.innerHTML += html;

    let season = document.querySelector(".div__season__episode");
    season.addEventListener("click", changeSeason)

    let quit = document.querySelector("#quitEpisode");
    quit.addEventListener("click", quitEpisode)

    let epPlus = document.querySelector(".plus")
    epPlus.addEventListener("click", () => {
        let plus = Number(e.Episode)
        console.log(plus)
        C.getLocalDataEpisode( M.allSeasons[e.Season].Episodes[plus].imdbID, "non")
    })

    let epMoins = document.querySelector(".moins")
    epMoins.addEventListener("click", () => {
        let moins = Number(e.Episode)-2
            C.getLocalDataEpisode( M.allSeasons[e.Season].Episodes[moins].imdbID, "non")
    })
    }

V.renderOptionInut = function(e){
    let template = document.querySelector("#optionInput");
    let html = template.innerHTML;

    html = html.replaceAll("{{season}}", e);
    html = html.replace("{{ep1}}", M.allSeasons[e].Episodes[0].imdbID);

    let listEp = document.querySelector("#season-select");
    listEp.innerHTML += html;
}

C.init();
