/* PROBLEMA A
   Dado una lista encadenada, y 5 valores para insertar, insertar dichos valores
   alternadamente al final y al principio de la lista:                            */

const pushAndUnshift = (array) => {
    let initArray = [1,4,5,3]
    for (let i = 0; i < array.length; i++) {
        i % 2 == 0 ? initArray.push(array[i]) : initArray.unshift(array[i]) 
    }
    console.log("Array con datos introducidos alternadamente", initArray);
    return initArray
}

/* MODIFICAR LOS VALORES DEL ARRAY PARA PROBAR LA FUNCION Y ASI GENERAR 
   DISTINTOS CASOS DE PRUEBA                                                       */

let array = [6,7,8,9,10]
pushAndUnshift(array)



console.log("\n///////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////");




/* PROBLEMA B
   Dadas 2 listas ordenadas, obtener una 3era ordenada:                            */

const orderArray = (array1, array2) => {
        let joinArray = [...array1, ...array2].sort()
        console.log("\n Array ordenado", joinArray);
        return joinArray
}

/* MODIFICAR LOS VALORES DE LOS 2 ARRAY PARA PROBAR LA FUNCION Y ASI GENERAR 
   DISTINTOS CASOS DE PRUEBA                                                       */
   
let array1 = [1,3,5,8]
let array2 = [2,3,6,9]
orderArray(array1, array2)