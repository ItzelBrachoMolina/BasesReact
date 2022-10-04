
const nombre='Fernando';
const apellido='Herrera';

const nombreCompleto=`${nombre}
                      ${apellido}
                      ${1+1}
                      `;
console.log(nombreCompleto);

function getSaludo(){
    return 'Hola' + nombre;
}

console.log(`Este es un template string ${getSaludo(nombre)}`);