var type = [
    "Matilda",
    "High School Musical",
    "Ratatouille",
    "Enredados"
];

var descripcion = [
    "Madilta es una película sobre una niña que tiene super poderes, le gusta mucho leer y jugar con su muñeca",
    "High School Musical es un músical de Disney que tiene muchas canciones para bailar",
    "Ratatouille es una película sobre una ratita que le gusta mucho cocinar, se va a vivir a Francia.",
    "Enredados es una adaptación de Rapunzel, es un músical y tiene muchas escenas de risa."
];

var imagenes = [
    "imagen2.jpg",
    "imagen3.jfif",
    "imagen4.jfif",
    "imagen5.jpg"
];


var i =0;

function siguiente(){
    document.getElementById("parrafo2").innerHTML = type[i];
    document.getElementById("parrafo3").innerHTML = descripcion[i];
    document.getElementById("album").src = imagenes[i];
    i++;
    document.getElementById("audio").play();


}
