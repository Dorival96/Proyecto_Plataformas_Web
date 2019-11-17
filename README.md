# Aplicación en Node.Js
# Descripción
Esta  aplicación en NodeJS nos  permita leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísiticas de un determinado país en un
año específico.

## Pasos para ejecutar el proyecto 🚀
Para ejecutar este proyecto manejamos dos comandos:
publicar y guardar:
publicar: Este comando publicará las
estadísticas en una página web básica. Se requieren tres
parámetros:
• --file -f: Permite establecer el path del archivo CSV que
contiene los datos a analizar
• --country -c: Permite determinar el país a analizar a través
de su código ISO 3166 ALPHA-3.
• --year -y: Permite especificar el año para el cual se
requiere las estadísticas. Por defecto, 2018.
guardar: Este comando almacenará los
resultados de las estadísticas en un archivo de texto. Recibe los
mismos parámetros que el comando anterior, y se adiciona la
siguiente opción:
• --out -o: Establece el nombre del archivo donde se almacenrá
los resultados.

#### Utilizando el comando publicar
**DATASET.csv** es el archivo de donde vamos a consultar, este documento ya esta listo en la carpeta general del proyecto.
**ECU** es el código del país, para esto puedes buscar el código del país que deseas en este link:
[ISO 3166 ALPHA-3](https://laendercode.net/es/3-letter-list.html)
**2017** es el año del que queremos los resultados, no puedes ingresar un año menor a 1960.
Aquí tienes un ejemplo de como utilizar este comando:

```
node app.js publicar -f  DATASET.csv -c ECU -Y 2017  
```


### Pre-requisitos 📋

## Integrantes✒️

* **Misael Cabascango** 
* **Wendy German** 
* **Diego Osorio** 
* **Dorival Pichamba** 
* **Jefferson Yanqui** 
## Expresiones de Gratitud 🎁








