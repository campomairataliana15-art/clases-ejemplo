// una veterinaria necesita desarrollar un sistema para la atencion de mascotas 
// animal, propietario, atencion

class Animal {
    nombre 
    raza
    especie
    edad 
    constructor(nombre,raza,especie,edad){
        this.nombre = nombre
        this.raza = raza
        this.especie = especie
        this.edad = edad
    }
    registrarNombre(nuevonombre){
        this.nombre = nuevonombre
    }
     registrarRaza(nuevaraza){
        this.raza = nuevaraza
    }
     registrarEspecie(nuevaespecie){
        this.especie = nuevaespecie
    }
     registrarEdad(nuevaedad){
        this.edad = nuevaedad
    }
    mostrarinformacion(){
        console.log(this.nombre +" "+ this.raza)
    }
}

class Propietario{
    nombrePropietario
    direccion
    telefono
    constructor(nombre,direccion,telefono){
        this.nombrePropietario = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.mascota = []
    }
    registrarNombre(nuevonombre){
        this.nombrePropietario = nuevonombre
    }
    registrarDireccion(nuevadireccion){
        this.direccion = nuevadireccion
    }
    registrarTelefono(nuevotelefono){
        this.telefono = nuevotelefono
    }
    registrarMascota(nuevamascota){
        //pop, unshift, shift push
        this.mascota.push(nuevamascota)
    }
    mostrarinformacion(){
        console.log("mascota: " + this.mascota[0].nombre  + " propietario: " + this.nombrePropietario)
    }
}
let colmillo = new Animal("colmillo", "pitbul", "perro", 12)
colmillo.mostrarinformacion()
let alexa = new Propietario("Alexa", "123", "1111")
alexa.registrarMascota(colmillo)
alexa.mostrarinformacion()
