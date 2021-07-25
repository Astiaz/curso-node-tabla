const fs = require('fs');
const colors = require('colors');

const crearTabla = async( base = 5, listar = false, limite = 10) =>{
    try{
        let nombreArchivo = `tabla-${base}.txt`;
        const espaciadores = '=============='.brightYellow;

        let salida, consola = '';
    
        for(let i = 1; i <= limite; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.brightBlue.bold} ${i} ${'='.brightBlue.bold} ${base*i}\n`;
        }
    
        if(listar){
            console.log(espaciadores);
            console.log('Tabla del:'.brightYellow, colors.brightBlue(base));
            console.log(espaciadores);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);

        return nombreArchivo;
    } catch (error){
        throw error;
    }
}

module.exports = {
    crearTabla
}