const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la actualización de un por hacer'
};


const argv = require('yargs')
    .command('crear', 'Crea cosas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza cosas por hacer', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra las cosas por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}