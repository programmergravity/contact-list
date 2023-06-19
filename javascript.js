//          Lista de contactos -1

//  1 Creando lista de contactos

const listaDeContactos = ['Liliana Martinez', 'Oscar Perez', 'Carlos Gonzales', 'Richard Cuellar', 'Sara Piedrahita'];

//  2 Añadir un contacto

function agregarUnContacto() {
}   agregarUnContacto = listaDeContactos.push('Kevin Bolaños');

//  3 Eliminar un contacto

function eliminarUnContacto() {
}   listaDeContactos.splice(2, 1);

//  4 Mostrar en consola el resultado

function Contactos(mostrarContactos) {
    return(mostrarContactos)
}

const resultado = Contactos(listaDeContactos, agregarUnContacto, eliminarUnContacto);

console.log(`Mostrando la lista de Contactos`, resultado);
