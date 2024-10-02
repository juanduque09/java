//short-circuit

//Falso
//False
//0
//''
//null
//undefined
//NaN
let nombre = 'Chanchito feliz';
let username = nombre || 'anonimo';
console.log(username);

function fn1() {
    console.log('soy funcion1')
    return false;
}

function fn2() {
    console.log('soy funcion2')
    return true;
}

let x = fn1() && fn2();