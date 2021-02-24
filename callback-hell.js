const empleados = [
    {
        id: 1,
        nombre: 'Fernando',        
    },
    {
        id: 2 , 
        nombre: 'Marta'
    },
    {
        id: 3 ,
        nombre:'Manuel'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    }
];
//Esta funcion me da el nombre por el id 
const getEmpleadoById = (id, callback) =>{
    
    const empleado = empleados.find( (e) => e.id === id );

    if(empleado){
        callback(null,empleado);
        return;
    }
    callback(new Error('El empleado no existe'));
    

};
//Esta funcion me da el sueldo por el id
const getSueldoById = (id,callback) =>{

    const sueldo = sueldos.find( (e) => e.id === id);
    
    if(sueldo){
        callback(null,sueldo);
        return;
    }
    callback(new Error('El empleado no recibe sueldo'));

};



const id = 3 ;

//Asi llamaria a la funcion si solo quiero saber el sueldo 
/*
getSueldoById(id,(error, sueldo) => {
    if (error){
        console.log('Error!!!!...');
        console.log(error);
        return;
    }

    console.log(`El empleado recibe: ${sueldo.sueldo}`);
})
*/
//Asi llamaria a la funcion si solo quiero saber el nombre del empleado
/*
getEmpleadoById(id,(error, empleado) => {

    if(error){
        console.log('Error!!!!....');
        console.log(error);
        return;
    }

    //aca poner el lo que recibo de la funcion del sueldo y sumarlo al console log
    console.log(`El empleado: ${empleado.nombre}`);
});
*/

getEmpleadoById(id,(error, empleado) => {

    if(error){
        console.log('Error!!!!....');
        console.log(error);
        return;
    }
    
    getSueldoById(id,(error, sueldo) => {
        if (error){
            console.log('Error!!!!...');
            console.log(error);
            return;
        }

        console.log(`El empleado: ${empleado.nombre} tiene un sueldo de: ${sueldo.sueldo}`);
        
    })

    
});





