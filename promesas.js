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

const getEmpleadoById = (id) =>{

    return new Promise((resolve,reject)=>{

        const empleado = empleados.find( (e) => e.id === id );

        if(empleado){
        resolve(empleado);
        return;
        }
        reject(`El empleado con id ${id} no existe`);

    });
};

const getSueldoById = (id) =>{
    return new Promise((resolve,reject)=>{

        const salario = sueldos.find((e)=>e.id === id);

        if(salario){
            resolve(salario);
            return;
        }
        reject(`El empleado con id ${id} no recibe salario`);
    });
};

const id = 4;
let nombre;

getEmpleadoById(id).then( empleado => {

    nombre = empleado.nombre;
    return getSueldoById(id);
    
}).then(salario=>{

    console.log(`El empleado ${nombre} tiene un sueldo de ${salario.sueldo}`);
})

.catch(err => console.log(err));


//Asi Puedo llamar a una funcion 
getSueldoById(id).then(salario =>{
    console.log(`El empleado con id ${id} tiene un sueldo de: ${salario.sueldo}`)
}).catch(err => console.log(err));
