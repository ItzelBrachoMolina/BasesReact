//pares de valores

const persona={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:5656423,
        lat:14.3232,
        lng:34.92333
    }
};

//console.log({persona});

console.table({persona});


//para hacer un clon
const persona2={...persona};
persona2.nombre='Peter';


console.log(persona);
console.log(persona2);