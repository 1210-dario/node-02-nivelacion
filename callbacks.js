/*
setTimeout(() =>{
    console.log('Hola Mundo');
},2000);
*/
// un callback es una funcion que se puede pasar como parametro para que lo ejecute otra funcion
/*
const saludar =() => {
    console.log('Hola Mundo');
}

setTimeout(saludar,2000);
*/
//Son 2 maneras de escribir lo mismo

const getUsuarioById = (id,callback) => {

    const user = {
        id,
        nombre:'Dario'
    }

    setTimeout(() => {

        callback(user);

    },1000);
}

/*const imprimirUsuario = (usuario) => {
    console.log(usuario.nombre);
}*/
//Esta es la misma funcion para imprimir el usuario

getUsuarioById(10, (usuario) => {
    console.log(usuario.nombre)
});

/*
getUsuarioById(10,({nombre,id}) => {
    console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`);
});
*/
