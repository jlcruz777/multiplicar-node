// requirds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${ base }, no es un numero.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido: ${ limite }, no es un numero.`);
            return;
        }
        console.log('==================================='.cyan);
        console.log(`Tabla de Multiplica del ${base} `.cyan);
        console.log('==================================='.cyan);
        for (let xi = 1; xi <= limite; xi++) {
            console.log(` ${ base } X ${ xi} = `, base * xi);
        }
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${ base }, no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido: ${ limite }, no es un numero.`);
            return;
        }

        let data = '';

        for (let xi = 1; xi <= limite; xi++) {
            // console.log(` ${ base } X ${ xi} = `, base * xi);
            data += ` ${ base } X ${ xi} = ${base * xi}\n `;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
};