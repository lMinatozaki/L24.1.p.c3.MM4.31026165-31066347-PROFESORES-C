/*PROFESORES-C
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 3=Agregado, 4=Asociado, 5=Titular), 
también se conoce de cada profesor: su nombre y sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
promueva a la siguiente categoría a los profesores de un sexo dado, considerando que los profesores titulares ya no se pueden promover.
- Función: promoverProfesoresDeSexo.
- Parámetros: profesores (array de objetos profesor), sexo (una letra).
- Retorno: el arreglo de todos los profesores con las modificaciones realizadas.
- Condiciones: sólo se promueven los profesores del sexo dado y que sean “promovibles”. 
*/

let promoverProfesoresDeSexo = (profesores, sexo) => {
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].sexo === sexo && profesores[i].categoría < 5) {
            profesores[i].categoría += 1;
        }
    }
    return profesores;
};

let profesores = [
    { categoría: 1, nombre: 'Ana', sexo: 'F' },
    { categoría: 2, nombre: 'Luis', sexo: 'M' },
    { categoría: 3, nombre: 'Eva', sexo: 'F' },
    { categoría: 5, nombre: 'Pedro', sexo: 'M' },
    { categoría: 4, nombre: 'Maria', sexo: 'F' }
];

let salida = document.getElementById("salida");
let profesoresActualizados = promoverProfesoresDeSexo(profesores, 'F');

salida.innerHTML = `Profesores promovidos: <br>`;
profesoresActualizados.forEach((profesor) => {
    salida.innerHTML += `Nombre: ${profesor.nombre}, Categoría: ${profesor.categoría}, Sexo: ${profesor.sexo}<br>`;
});
