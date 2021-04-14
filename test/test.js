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
   DISTINTOS CASOS DE PRUEBA                                             */
let array = [6,7,8,9,10]

pushAndUnshift(array)