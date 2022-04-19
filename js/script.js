let M = {};

M.allEpisodes = []; //toutes les données de tous les épisodes

M.allSeasons = []; //toutes les données de toutes les saisons

M.nbSeason = 0; //nombre de saison

M.nbRequettes = 0; //nombre de requettes

let C = {};

C.init = function() {
    V.init();
}

C.getData = function(e) {
    let data = e.target.dataset.nbseason;
    if (data != undefined) {
        C.getAllEpisodes(data);
    } else {
        data = e.target.dataset.id;
        if (data != undefined) {
            C.getLocalDataEpisode(data)
        }
    }
}

C.getLocalDataEpisode = function(data) {
    max = M.allEpisodes.length; //nombre d'épisodes stoké sur notre variable locale
    for (let i = 0; i < max; i++) {
        if (M.allEpisodes[i].imdbID == data) { //si on retrouve l'id dans un des épisode
            let listSeason = document.querySelector(".episode__list"); //on efface le contenue html de la div
            listSeason.innerHTML = "";
            V.renderOneEpisode(M.allEpisodes[i]) //mise en forme des données
        }
    }
}

C.getAllSeason = function() {
    let oneEpisode = document.querySelector(".episode__list");
    oneEpisode.innerHTML = "";
    if (M.nbSeason > 0) {
        for (let i = 1; i < M.nbSeason - 1; i++) {
            V.renderSeason(M.allSeasons[i])
        }
    } else {
        let s = new XMLHttpRequest();

        s.open("GET", 'https://www.omdbapi.com/?t=American%20Horror%20Story&apikey=7dd6434e');


        s.addEventListener('load', function() {
            let eObj = JSON.parse(s.responseText);
            M.nbRequettes++;
            console.log("requette 1")
            M.nbSeason = eObj.totalSeasons;
            for (let i = 1; i < eObj.totalSeasons - 1; i++) {
                let one = new XMLHttpRequest();

                one.open("GET", 'https://www.omdbapi.com/?t=American%20Horror%20Story&Season=' + i + '&apikey=7dd6434e');


                one.addEventListener('load', function() {
                    let obj = JSON.parse(one.responseText);
                    M.nbRequettes++;
                    console.log("requette 2")
                    M.allSeasons[i] = obj;
                    V.renderSeason(M.allSeasons[i])
                })

                one.send();
            }
        })

        s.send();
    }

}

C.getAllEpisodes = function(e) {
    max = M.allSeasons[e].Episodes.length;
    maxReset = M.allSeasons[e].totalSeasons - 1;
    for (let i = 1; i < maxReset; i++) {
        let listEp = document.querySelector(".listEpisodesSeason" + i);
        listEp.innerHTML = "";
    }
    for (let i = 0; i < max; i++) {
        C.getEp(e, M.allSeasons[e].Episodes[i].Episode);
    }

}

C.getEp = function(s, e) { //récupère les données des épisodes d'un saison et les incrémentes un à un dans la div avec la class episodes grace à la fonction V.renderEp

    let max = M.allEpisodes.length;
    let double = "no";
    let idEpisode;
    for (let i = 0; i < max; i++) {
        if (M.allEpisodes[i].Episode == e && M.allEpisodes[i].Season == s) {
            double = "yes";
            idEpisode = i;
        }
    }

    if (double == "no") {
        let ep = new XMLHttpRequest();
        ep.open("GET", 'https://www.omdbapi.com/?i=tt1844624&Season=' + s + '&Episode=' + e + '&apikey=7dd6434e');
        ep.addEventListener('load', function() {
            let obj = JSON.parse(ep.responseText);
            M.nbRequettes++;
            console.log("requette 3")
            let last = M.allEpisodes.length;
            M.allEpisodes[last] = obj;
            V.renderListEpisode(M.allEpisodes[last]);
        })

        ep.send();
    } else {
        V.renderListEpisode(M.allEpisodes[idEpisode]);

    }
}


let V = {};

V.init = function() { //récupère les données d'une saison (principalement le nombre d'épisodes)
    C.getAllSeason();
    let season = document.querySelector(".episode__list");
    season.addEventListener("click", C.getData)
}

V.renderSeason = function(e) {
    let template = document.querySelector("#listSeason");
    let html = template.innerHTML;
    html = html.replace("{{nbSeason}}", e.Season);
    html = html.replace("{{nbSeason}}", e.Season);
    html = html.replace("{{nbSeason}}", e.Season);
    html = html.replace("{{nbEpisodes}}", e.Episodes.length);

    let saison = document.querySelector(".episode__list");
    saison.innerHTML += html;
}

V.renderListEpisode = function(e) {
    let template = document.querySelector("#listEpisode");
    let html = template.innerHTML;

    html = html.replace("{{id}}", e.imdbID);
    html = html.replace("{{nb}}", e.Episode);
    html = html.replace("{{titre}}", e.Title);
    html = html.replace("{{date}}", e.Released);
    html = html.replace("{{plot}}", e.Plot);

    let listEp = document.querySelector(".listEpisodesSeason" + e.Season);
    listEp.innerHTML += html;
}

V.renderOneEpisode = function(e) {
    let sectSerie = document.querySelector(".serie__sect");
    sectSerie.style.display = "none"

    let sect = document.querySelector(".about__sect");
    sect.style.display = "none"

    let awards = document.querySelector(".awards__sect");
    awards.style.display = "none"

    let template = document.querySelector("#oneEpisode");
    let html = template.innerHTML;
    html = html.replace("{{nb}}", e.Episode);
    html = html.replace("{{titre}}", e.Title);
    html = html.replace("{{date}}", e.Released);
    html = html.replace("{{note}}", e.imdbRating);
    html = html.replace("{{img}}", e.Poster);
    html = html.replace("{{text}}", e.Plot);
    html = html.replace("{{time}}", e.Runtime);
    html = html.replace("{{genre}}", e.Genre);
    html = html.replace("{{director}}", e.Director);
    html = html.replace("{{year}}", e.Year);
    html = html.replace("{{rated}}", e.Rated);
    html = html.replace("{{writers}}", e.Writer);
    html = html.replace("{{actors}}", e.Actors);
    html = html.replace("{{nbSeason}}", e.Season);
    html = html.replace("{{reviews}}", e.Reviews);
    html = html.replace("{{language}}", e.Language);
    html = html.replace("{{country}}", e.Country);

    let listEp = document.querySelector(".one__episode");
    listEp.innerHTML += html;
}

C.init();