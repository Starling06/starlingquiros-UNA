 //Estructura de datos y como se comporta.
 let mapa = new Map();

 mapa.set("clave", "valor");
 
 console.log(mapa.get("clave")); 
 
 // Explicar, como se puede recorrer un Hash Map, paso a paso.
 mapa.set("clave1", "valor1");
 mapa.set("clave2", "valor2");
 
 mapa.forEach((valor, clave) => {
   console.log(`Clave: ${clave}, Valor: ${valor}`);
 });
 
 
 //Ejemplo:
 let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 7,8, 9];
 let duplicados = contarDuplicados(arr);
 
 // Imprimir los números duplicados y su cantidad
 for (let [num, count] of duplicados) {
     console.log(`Número: ${num}, Cantidad: ${count}`);
 }
 
 // Explicar paso a paso.
 function contarDuplicados(arr) {
     let mapa = new Map();
 
     // Recorrer el array
     for (let i = 0; i < arr.length; i++) {
         if (mapa.has(arr[i])) {
             mapa.set(arr[i], mapa.get(arr[i]) + 1);
         }
         else {
             mapa.set(arr[i], 1);
         }
     }
 
     let duplicados = new Map();
 
     //El Map original
     for (let [num, count] of mapa) {
         // Si el contador es mayor a 1, el número está duplicado
         if (count > 1) {
             duplicados.set(num, count);
         }
     }
 
     return duplicados;
 }
 