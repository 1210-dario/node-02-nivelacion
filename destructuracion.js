const personaje = {
    nombre:"Pepe",
    apellido:"Argento",
    profesion:"Zapatero",
    getDescripcion(){
        return `${nombre} ${this.apellido} es ${this.profesion}`;
    }
}

//const nombre = personaje.nombre;
//const apellido = personaje.apellido;
//const profesion = personaje.profesion;

//console.log(nombre,apellido,profesion);

//const {nombre, apellido,profesion,edad = 50} = personaje;

//console.log(nombre,apellido,profesion,edad);

/*const imprimirPersonaje = ({nombre,apellido,profesion,edad = 50}) => {
    console.log(nombre,apellido,profesion,edad);
}

imprimirPersonaje(personaje);*/

const personajes = ['Pepe','Moni' ,'Koki'];
/*
const p1 = personajes[0];
const p2 = personajes[1];
const p3 = personajes[2];
*/
const[,,p3] = personajes;
//Repasar esta forma de ver el array

console.log(p3);
