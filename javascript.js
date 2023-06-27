//          Lista de contactos -1

//  Creando lista de contactos

const contactList = [];

//  Crear funcion para los contactos

function createContact(id, nombres, apellidos, telefono, ciudad, direccion) {
    let newContact = {
      id: id,
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      ubicaciones: {
        ciudad: ciudad,
        direccion: direccion
      }
    };
    contactList.push(newContact); //   Agregar contactos
}

//  Crear nuevos contactos

createContact(4576, 'Julian', 'Ramirez', '3125679000', 'Bogota D.C', 'Avenida boulevard 5500');
createContact(7896, 'Liliana', 'Martinez', '3175668000', 'Pereira', 'Avenida Pasoancho 6677')
createContact(3465, 'Kevin', 'Bolaños', '3147678000', 'Mendoza', 'Calle San Martin 4567')
createContact(8972, 'Andres', 'Tamayo', '3137656000', 'Cali', 'Avenida Simon Bolivar 3422')

console.log(contactList);

//  Función para eliminar un contacto

function eliminateContact(id) {
    let indice = contactList.findIndex(function(contacto) {
      return contacto.id === id;
    });
    if (indice !== -1) {
      contactList.splice(indice, 1);
    }
  }

  eliminateContact(7896);

//  Función para actualizar un contacto

function actualizateContact(id, nuevaInformacion) {
  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].id === id) {
        contactList[i] = Object.assign(contactList[i], nuevaInformacion);
        break;
      }
    }
  }

actualizateContact(3465, { telefono: '3134575000', ubicaciones: { direccion: 'Calle Godoy Cruz 7000' } });


//  Mostrar lista final de contactos
console.log(contactList);


