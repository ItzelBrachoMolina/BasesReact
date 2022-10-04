const personajes=['Goku','Vegetta','Trunks'];

const[,,p3]=personajes;

console.log(p3)

const retornaArreglo=()=>{
    return ['ABC',123];
}


const [letras,numeros]=retornaArreglo();
console.log(letras,numeros)

//Tarea
//1. el primer valor del arr se llamará nombre
//2. se llamará set nombre

const useState=(valor)=>{
    return [valor, ()=>{console.log('hola mundo')}];
}

const [nombre]=useState();

console.log(nombre);
setNombre('goku');