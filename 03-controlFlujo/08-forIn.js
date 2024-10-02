let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
};

let animales = ['Chanchito feliz', 'Dragón', 'canguro'];
for ( let indice in animales) {
    console.log(indice, animales[indice]);
}