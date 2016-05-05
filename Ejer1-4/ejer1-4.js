/*----------------------------------------
--------EJERCICIOS PRACTICOS 1------------
-----------------------------------------*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer n
	4. Inicializar c=1, suma=0
	5. Mientras c<=n 
	6. Leer Estatura 
		6a. Realizar la operacion de suma=suma+estatura 
		6b. Incrementar c=c+1
	7. De lo contrario 
		7a. Realizar la operacion de p=suma/n
	8. EScribir P
	9. Fin	
*/

alert("PROMEDIO DE ESTATURAS DE UN GRUPO DE PERSONAS 'N' ")
var n=parseInt(prompt("Escriba numero de personas :"));
var c = 1;
var suma = 0;

while( c <= n){
	estatura=parseFloat(prompt("Escriba la estatura:" + c));
	suma += estatura;
	c++;
}
p= suma/n;

alert("El promedio de estatura es: "+ p);

/*----------------------------------------
--------EJERCICIOS PRACTICOS 2------------
-----------------------------------------*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer n1
	4. Inicializar menores=0, mayores=0, c1=1
	5. Mientras c1<=n1 
	6. Leer num
	7. si num<=0
		7a. Hacer menores=menores+1
	8. De lo contrario si num>0
		8a. Hacer mayores=mayores+1
	9. Incrementar c=c+1
	10. De lo contrario 
		10a. Escribir menores, mayores
	11. Fin	
*/

alert("CANTIDADES MENORES O IGUALES A CERO ")
var n1 = parseInt(prompt("Que cantidad de numeros deseas ingresar?"));
var menores = 0;
var mayores = 0;
c1 = 1;

while(c1 <= n1){
	var num = parseInt(prompt("Ingresa numero entero " + c1));
	if (num <= 0){
		menores=menores+1;
	}else if(num >0){
		mayores=mayores +1;
	}
	c1++;
}
alert("Menores o iguales a cero: "+menores+"\n mayores: "+ mayores);

/*----------------------------------------
--------EJERCICIOS PRACTICOS 3------------
-----------------------------------------*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer nu
	4. Inicializar na=1, naa=-1, resultado=''
	5. Para co=1, co<=0, co=co+1 
		5a. Inicializar numf=0 
		5b. Realizar la operacion numf=na+naa, naa=na; na=numf, resultado=resultado+numf
	6. De lo contrario 
		6a. Escribir resultado
	9. Fin	
*/

alert("SERIE DE FIBONACCI")
var nu = parseInt(prompt("Cuantos numeros fibonacci quieres ver? "));
var na=1;
var naa=-1;
var resultado = '';

for(var co=1; co<=nu; co++){
	var numf = 0;
	numf = na+naa;
	naa = na;
	na = numf;
	resultado += numf + " ";
}

alert(resultado);

/*----------------------------------------
--------EJERCICIOS PRACTICOS 4------------
-----------------------------------------*/
/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Leer n
	4. Inicializar c=1, suma=0
	5. Mientras c<=n 
	6. Leer Estatura 
		6a. Realizar la operacion de suma=suma+estatura 
		6b. Incrementar c=c+1
	7. De lo contrario 
		7a. Realizar la operacion de p=suma/n
	8. EScribir P
	9. Fin	
*/

alert("KM EN EL QUE SE ENCUENTRAN DOS PERSONAS EN LA CARRETERA")
var kilometro;
var d1 = 70;
var d2 = 150;
var vt = null;

vt = (d2 - d1)/2;

kilometro = d1 + vt;

alert("Se encuentran en el kilometro: " + kilometro);
