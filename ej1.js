/*1. Ejercicio 1 JS: Tipos de datos*/
/*Ej1*/
let cadena ="Hola buenas";
console.log(cadena);
/*Ej2*/
let numero=12;
console.log(numero);
/*Ej3*/
let tipo=true;
console.log;
/*Ej4*/
let variableNull = null;
let variableUndefined;
console.log(variableNull);
console.log(variableUndefined);
/*Ej5*/
let comida={
    name:"Fresa",
    price:2.00,
    category:"Fruta"
};
console.log(comida);
/*Ej6*/
let colores=["azul","verde","blanco"]
console.log;
/*Ej7*/
let colorFav = "Azul";
console.log("Primer color favorito:", colorFavorito);
colorFavorito = "Blanco"; 
console.log("Ultimo color favorito:", colorFavorito);
/*Ej8*/
let variableSinValor;
let variableConNull = null;
console.log(variableSinValor);
console.log(variableConNull);
/*Ej9*/
let variable1 = "Soy num 1";
function miFuncion() {
    let variable2 = "Soy num 2";
    console.log(variable1)
    console.log(variable2);
}
miFuncion();
console.log(variable1); 
/*Ej10*/
let nombre1 = "Dario";
let nombre2 = "Paco";
let nombre3 = "Luis";
console.log(nombre1, nombre2, nombre3);
console.log("Los nombres");
console.log("Dario");
console.log("Paco");
console.log("Luis");
/*Ej11*/
let num1=4;
let num2=5;
console.log("Suma",num1 + num2);
console.log("Resta",num1 - num2);
console.log("Multiplicacion",num1 * num2);
console.log("Division",num1 / num2);
console.log("Resto",num1 % num2);
num1++;
console.log("Incremento",num1);
num2--;
console.log("Decremento",num2);
/*Ej12*/
let cadenaMultiple="Hola buenos dias\nHoy es sabado\tY juega el Real Madrid";
console.log(cadenaMultiple);
/*2. Ejercicio 2 JS: Estructuras de control*/
/*Ej1*/
function verificarNumero(numero) {
    if (numero > 0) {
        console.log("El numero es positivo.");
    } else if (numero < 0) {
        console.log("El numero es negativo.");
    } else {
        console.log("El numero es cero.");
    }
}
verificarNumero(5);
/*Ej2*/
function calculadorEdad(edad){
    if(edad<18){
        console.log("Es menor de edad")
    }
    else if(edad>18 && edad<=55){
        console.log("Es mayor de edad")
    }
    else if(edad>55){
        console.log("Es anciano de edad")
    }
}
calculadorEdad(12);
/*Ej3*/
for(let i=0;i<=4;i++){
console.log(i)
}
/*Ej4*/
let contador=0;
while(contador<=4){
console.log(contador);
contador++
}
/*Ej5*/
let x = 0;
do {
    console.log(x);
    x++;
} while (x <= 4);
/*Ej6*/
for(let i=0;i<=4;i++){
    if(i==3){
        break;
    }
    console.log(i)
}
/*Ej7*/
for(let i=0;i<=4;i++){
    if(i==3){
        continue;
    }
    console.log(i)
}
/*Ej8*/
let opcion = prompt("Dime un mes del 1 al 12");
opcion = parseInt(opcion);
switch (opcion) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre"); 
        break;
    case 11:
        console.log("Noviembre");
        break;  
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Numero invalido"); 
}

/*3. Ejercicio 3 JS: Funciones*/
/*Ej1*/
let radio = parseFloat(prompt("Dime el radio del circulo"));
radio=Number(radio);
function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function calcularPerimetro(radio) {
    return 2 * Math.PI * radio;
}

console.log(calcularArea);
console.log(calcularPerimetro);
/*Ej2*/
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(calculatePower(2, 3));

/*4. Ejercicio 4 JS: Arrays*/
/*Ej1*/
let cantidad = prompt("Cuantos numeros quieres introducir?");
cantidad = parseInt(cantidad);

let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let numero = prompt("Introduce un numero:");
    numeros.push(parseFloat(numero));
}

function findLargestNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let mayor = findLargestNumber(numeros);
console.log("El numero mas grande es: " + mayor);

/*5. Ejercicio 5 JS: Bucle for*/
/*Ej1*/
/*1*/
for(let i = 20;i>30;i++){
    console.log(i)
}
/*2*/
for(let i = 30;i>50;i+=2){
    console.log(i)
}
/*3*/
let suma=0;
for(let i = 0;i<=50;i++){
suma+=i
}
/*4*/
for (let i = 1; i <= 10; i++) {
    console.log("8 x " + i + " = " + (8 * i));
}
/*5*/
let array = ["Madrid", "Barca", "Jerez", "Malaga"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
/*6*/
for (let i = 1; i <= 9; i++) {
    console.log('*'.repeat(i));
}
/*7*/
let sumaPares = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        sumaPares += i;
    }
}
console.log("Suma de los números pares del 1 al 50: " + sumaPares);
/*8*/
for (let i = 30; i >= 20; i--) {
    console.log(i);
}
/*9*/
let num = [8, 12, 19, 21];
let sumaNum = 0;

for (let i = 0; i < num.length; i++) {
    sumaNum += num[i];
}

let promedio = sumaNum / num.length;
console.log("El promedio es: " + promedio);
