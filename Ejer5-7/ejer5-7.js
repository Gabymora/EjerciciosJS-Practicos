/*----------------------------------------
--------EJERCICIOS PRACTICOS 5------------
-----------------------------------------*/

/*Pseudocodigo*/
/*	1. Inicio

	9. Fin	
*/

alert("CUANTO AHORRA UNA PERSONA DURANTE UN AÑO")
var mes = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
var meslength = mes.length;
var c = -1;
var cadena="";
var suma = null;

while (c < 11){
	c++;
	var N = parseFloat(prompt("Ingrese cantidad ahorrada del mes: " + mes[c] ));

	cadena +=  mes[c] + " : " + "La cantidad es " + N + "\n";
	suma += N;
}

alert(cadena + "\n" + "Al año tienes ahorrado: " + suma);

/*----------------------------------------
--------EJERCICIOS PRACTICOS 6------------
-----------------------------------------*/


/*----------------------------------------
--------EJERCICIOS PRACTICOS 7------------
-----------------------------------------*/

alert("PAGO DE SUELDO POR HORA TRABAJADA")
var dia = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var suma = 0;
var sueldo =0;
var mensaje = '';
var pago = parseFloat(prompt("Ingrese el pago por hora: "));

pago;
for(var c=0;c<6;c++){
	var horas = parseFloat(prompt( dia[c] + " Ingrese horas trabajadas: " ));
	suma += horas;
	mensaje += dia[c] + " : " + horas + " hrs trabajadas" + "\n"
}
sueldo = suma*pago;

alert(mensaje + "\n" + "El pago por hora es: "+ pago+ "\n" + " El sueldo semanal es: " + sueldo);
