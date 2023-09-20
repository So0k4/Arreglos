function alwaysHungry(arr) {
    // tu código aquí 
    if(!arr.includes("comida"))(console.log("Tengo Hambre!!"))
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "comida"){
            console.log("delicioso", i)

        }
    }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length
    var count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]> avg){
            count++;
        }
    }
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta





function reverse(arr) {
    // tu código aquí
    let temp = [];
    for(let i = arr.length-1; i >= 0 ; i--){
        temp.push(arr[i])
        }
    return temp;
}

var result = reverse(["a", "b", "c", "d", "e", "f"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]



function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for(let i = 0; i < n-2; i++){
        let sumaNumeros = fibArr[i] + fibArr[i + 1];
        fibArr.push(sumaNumeros)
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]