// Personaje de tv
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "tanjiro",  //Par llave(atributo)-valor
    anime: "Demon Slayer",
    edad: 16,
}; //Objeto literal

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);