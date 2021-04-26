const readXlsxFile = require('read-excel-file/node');
const prompt = require('prompt-sync')();

var parar = false;
var azar = 0;
var columnas = 50;
var comparar = "";
var respuesta = "";
var corte = "";
var texto = [];
var mescla = "";
var points = 0;
console.log("")

//Lee el documento excel
//pones el require pones la ruta del excel
//Nota excel lleva una c despues de la x => ex_c_el
readXlsxFile('../exel/uh.xlsx')
.then((rows) => 
{
    console.log("")

    //ciclo para el juego
    while(parar == false)
    {
        //funcion n aleatorio
        aleatorio();
        
        //imprime acertijo
        console.log(rows[azar][0]+". "+rows[azar][1]+" "+rows[0][2]);
        
        //mete la respuesta
        respuesta = rows[azar][2];
        respuesta = respuesta.toLocaleLowerCase();

        //recorta
        for(let i=0; i<respuesta.length; i++)
        {
            corte = respuesta.slice(i,i+1);
            texto.push(corte);
        }

        //mescla el texto
        for(let i = texto.length - 1; i>0; i--)
        {
            let iAleatorio = Math.floor(Math.random() * (i+1))
            let temporal = texto[i];
            texto[i] = texto[iAleatorio]
            texto[iAleatorio] = temporal;
        }
        
        //une el texto
        for(let i = 0; i<respuesta.length; i++)
        {
            mescla = mescla.concat(texto[i] + " ");
        }

        console.log("   pista: "+"' "+mescla+"'");

        //pones tu respuesta
        //pondre opciones*******
        comparar = prompt("Tu respuesta => ")
        console.log("")
        
        
        if(respuesta == comparar)
        {
            points++;
            console.log("Acertaste");
            console.log("");
        }
        else if(respuesta != comparar) 
        {
            console.log("La respuesta era: "+respuesta);
            console.log("");
        }
        console.log(points);
        console.log("");

        //borra datos
        texto = [];
        mescla = "";

        //falta comparar*******
        if(points == 5)
        {
            parar = true;
            console.log("Ganaste!!!");
            console.log("");
        }
    }
});

function aleatorio()
{
        azar = (columnas*(Math.random()));
        azar = azar.toFixed();
        
        if(azar == 0)
        {
            azar = 1;
        }
}