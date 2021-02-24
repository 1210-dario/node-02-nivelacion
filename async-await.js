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


const getEmpleadoById = async (id) =>{

    try{
        const empleado = empleados.find( (e) => e.id === id );
        if(empleado){
            return empleado;
        }
        throw new Error(`El empleado con id ${id} no existe`);
    } catch(error) {
        throw error;
    }
};

const getSueldoById = async (id) =>{

    try{
        const salario = sueldos.find((e)=>e.id === id);

        if(salario){
            return salario;
        }
        throw new Error(`El empleado con id ${id} no recibe sueldo`)
    } catch(error) {
        throw error;
    }  
};

const id = 1;

//Asi llamamos a la funcion con await ya que son funciones async
const getDatosCompletosEmpleado = async (id) =>{

    try {
        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        //return `El empleado con id ${id} es ${empleado.nombre} y tiene un sueldo de ${sueldo.sueldo}`;
        return {
            id,
            nombre : empleado.nombre,
            sueldo : sueldo.sueldo
        }
    }catch(error){
        throw error;
    }
};

//getDatosCompletosEmpleado(id).then(mensaje => console.log(mensaje))
//.catch(error => console.log(error.message));

getDatosCompletosEmpleado(id).then(data => console.log(`El empleado con id ${data.id} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`))
.catch(error => console.log(error.message));


//Esta es la otra forma de llamar la funcion con promise 
getEmpleadoById(id).then(empleado =>{
    console.log(`El empleado con id ${id} es ${empleado.nombre}`)
}).catch(err => console.log(err));