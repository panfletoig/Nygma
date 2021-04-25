const readXlsxFile = require('read-excel-file/node');
const prompt = require('prompt-sync')();

var parar = false;
var azar = 0;
var columnas = 14;
var comparar = "";
var respuesta = "";
var points = 0;
console.log("")

//Lee el documento excel
//pones el require pones la ruta del excel
//Nota excel lleva una c despues de la x => ex_c_el
readXlsxFile('../exel/uh.xlsx')
.then((rows) => 
{
    //busca en la celda 1 y lo imprime
    console.log(rows[0][0]+" "+rows[0][1])
    console.log("")

    //ciclo para el juego
    while(parar == false)
    {
        //funcion n aleatorio
        aleatorio();
        
        //imprime acertijo
        console.log(rows[azar][0]+". "+rows[azar][1]+" "+rows[0][3]);
        
        //mete la respuesta
        respuesta = rows[azar][2];

        //pones tu respuesta
        //pondre opciones*******
        comparar = prompt("Tu respuesta => ")
        console.log("")
        
        if(respuesta == comparar)
        {
            points++;
        }
        console.log(points)
        console.log("")

        //falta comparar*******
        if(points == 5)
        {
            parar = true;
        }
    }
})

function aleatorio()
{
        azar = (columnas*(Math.random()));
        azar = azar.toFixed();
        
        if(azar == 0)
        {
            azar = 1;
        }
}