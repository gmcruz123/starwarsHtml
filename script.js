var personajes = [];
var naves = [];
var peliculas = [];
var vehiculos = [];
var especies = [];
var planetas = [];
var personaje = {};
var nave = {};
var pelicula = {};
var vehiculo = {};
var especie = {};
var planeta = {};
var baseUrlApi = "https://swapi.co/api/";
var ruta1 = ""
var identificador = 0;


function getApi(ruta) {
    ruta1 = ruta
    var pintar = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 3 && this.status == 200) {
            switch (ruta) {

                case "people":
                    pintar = ""
                    personajes = JSON.parse(this.responseText).results;
                    personajes.forEach(element => {
                        pintar += '<a class="dropdown-item" href="#">' + element.name + '</a>'
                    });

                    document.getElementById("personajes").innerHTML = pintar;

                    break;
                case "films":
                    pintar = ""
                    peliculas = JSON.parse(this.responseText).results;
                    peliculas.forEach(function (element, index) {
                        pintar += '<a  class="dropdown-item" data-toggle="modal" data-target="#exampleModalCenter" onclick="getItem(2,' + index + ')">' + element.title + '</a>'
                    });

                    document.getElementById("peliculas").innerHTML = pintar;
                    break;

            }
        }
    };


    xhttp.open("GET", baseUrlApi + ruta, true);
    xhttp.send();
}

function getItem(ruta, id) {
    var pintar = "";
    identificador = id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 3 && this.status == 200) {
            switch (ruta) {

                case 2:
                    ruta1 = "films"
                    pintar = ""
                    pelicula = JSON.parse(this.responseText);
                    pintar = '<h1 class="titulo" >' + pelicula.title + '</h1><div class="row"><img height=500px width=800px src="img/movies/'+id+'.jpg"></div><p><strong>Episodio: ' + pelicula.title + '</strong></p><p> ' + pelicula.opening_crawl + '</p><strong><a onclick="pasarpag()" href="page2.html">Ver mas ..</a></strong>'

                    document.getElementById("gridMovies").innerHTML = pintar;

            }
        }
    };
    xhttp.open("GET", baseUrlApi + ruta1 + '/' + id, true);
    xhttp.send();
}

function pasarpag() {
    localStorage.setItem("id", identificador);

}


function getMovie(item) {
    var pintar = "";
    identificador = localStorage.getItem("id");
    var xhttp = new XMLHttpRequest();
    var xhttp1 = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 3 && this.status == 200) {
            pintar = ""
            pelicula = JSON.parse(this.responseText);
            personajes = pelicula.characters;
            especies = pelicula.species;
            planetas = pelicula.planets;
            vehiculos = pelicula.vehicles;
            naves = pelicula.starships;
            switch (item) {

                case 0:
                    personajes.forEach(function (element, index) {
                        if (pintar == "") {
                            pintar += '<div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img  class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a  onclick="getItemMovie("+element+")"  "class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                        else if (index % 3 == 0 && pintar != "") {
                            pintar += '</div><div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a onclick="getItemMovie('+element+')"  class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }

                        else {
                            pintar +=
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a onclick="getItemMovie("'+element+'")"  class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                    });
                    document.getElementById("personajes").innerHTML = pintar + '</div>';
                    break;

                case 1:
                    especies.forEach(function (element, index) {
                        if (pintar == "") {
                            pintar += '<div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                        else if (index % 3 == 0 && pintar != "") {
                            pintar += '</div><div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }

                        else {
                            pintar +=
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                    });
                    document.getElementById("especies").innerHTML = pintar + '</div>';
                    break;

                case 2:
                    planetas.forEach(function (element, index) {
                        if (pintar == "") {
                            pintar += '<div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                        else if (index % 3 == 0 && pintar != "") {
                            pintar += '</div><div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }

                        else {
                            pintar +=
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                    });
                    document.getElementById("planetas").innerHTML = pintar + '</div>';
                    break;

                case 3:
                    naves.forEach(function (element, index) {
                        if (pintar == "") {
                            pintar += '<div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                        else if (index % 3 == 0 && pintar != "") {
                            pintar += '</div><div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }

                        else {
                            pintar +=
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                    });
                    document.getElementById("naves").innerHTML = pintar + '</div>';
                    break;

                case 4:

                    vehiculos.forEach(function (element, index) {
                        if (pintar == "") {
                            pintar += '<div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                        else if (index % 3 == 0 && pintar != "") {
                            pintar += '</div><div class="row">' +
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }

                        else {
                            pintar +=
                                '<div class="col-sm"><div class="card" style="width: 18rem;">   <img class="card-img-top" src="..." alt="Card image cap">   <div class="card-body">     <h5 class="card-title">Card title</h5>     <p class="card-text"></p>     <a href="#" class="btn btn-primary">Go somewhere</a>   </div> </div></div>';
                        }
                    });
                    document.getElementById("vehiculos").innerHTML = pintar + '</div>';
                    break;
            }
        }
    };

    xhttp.open("GET", baseUrlApi + "films" + '/' + identificador, true);
    xhttp.send();
}


function getItemMovie(url) {
     pintar = ""
    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function () {
        if (this.readyState == 3 && this.status == 200) {
            personaje = JSON.parse(this.responseText);
            pintar = '<h1 class="titulo" >' + pelicula.title + '</h1><div class="row"><img height=500px width=800px src="https://timedotcom.files.wordpress.com/2017/05/star-wars_1023.jpg"></div><p><strong>Episodio: ' + personaje.name + '</strong></p><p> ' + "hlola"+ '</p><strong><a onclick="pasarpag()" href="page2.html">Ver mas ..</a></strong>'
            document.getElementById("griMovies").innerHTML = pintar;
        }
    }

xhttp1.open("GET", url, true);
xhttp1.send();
}

function imagencard(){
    identificador = localStorage.getItem("id");
    document.getElementById("imgcard").src =  "img/movies/"+identificador+".jpg";
}

imagencard();