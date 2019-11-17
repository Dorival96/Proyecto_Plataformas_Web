const fs = require('fs');
const colors = require('colors');
const { argv } = require('./config/yargs.js')
const { leer, Datos } = require('./metodos/lecturacsv.js');

let comando = argv._[0]
console.log(comando)

switch (comando) {

    //Seccion publicar
    case 'publicar':
        leer(argv.file).then(archivo => {
            Datos(archivo, argv.year, argv.country).then(archivo2 => {
                const http = require('http'),

                    fs = require('fs');

                ///Opcion de servidores
                const hostname = 'localhost';
                const port = '8000';

                function onRequest(solicitud, respuesta) {
                    respuesta.writeHeader(200, { 'Content-Type': 'text/html' });
                    fs.readFile('./index.html', null, function(error, data) {
                        if (error) {
                            respuesta.writeHead(404);
                            respuesta.write('Pagina no Encontrada');
                        } else {
                            respuesta.write(data);
                            respuesta.end(archivo2);
                        }
                        respuesta.end();
                    });
                }
                const server = http.createServer(onRequest);
                server.listen(port, hostname, () => {
                    console.log(`Servidor corriendo en http://${hostname}:${port}`);
                })

                ////
                fs.readFile('./index.html', function(err, html) {
                    if (err) {
                        throw err;
                    }
                    const server = http.createServer(function(request, response) {
                        response.statusCode = 200;
                        response.writeHeader(200, { "Content-Type": "text/html" });
                        response.write(html);
                        response.end(archivo2);
                    }).listen(3000);

                    // server.listen(port,hostname,()=>{
                    //   console.log(`Server running at http://${hostname}:${port}/`);
                    //})
                    console.log('El servidor esta funcionando correctamente');
                });


            }).catch((err) => console.log("error: ", err.red))
        }).catch((err) => console.log("error: ", err.red))


        break;

        //Seccion Guardar 
    case 'guardar':
        leer(argv.file).then(archivo => {
            Datos(archivo, argv.year, argv.country).then(archivo2 => {
                fs.writeFile(`./archivos/${argv.out}-${argv.country}-${argv.year}.txt`, `${archivo2}`, error => {
                    if (error)
                        console.log(error.red);
                    else
                        console.log('Archivo Creado'.green);

                });
            }).catch((err) => console.log("error: ", err.red))
        }).catch((err) => console.log("error: ", err.red))
        break;
    default:
        console.log('Comando no valido!')
};