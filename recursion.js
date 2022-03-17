// function Natural_number(num){
//     console.log(num)
//     if(num==50){
//         console.log(num)
//     }
//     else{
//         return Natural_number(++num)
//     }

// }
// let n = 1;
// let num = Natural_number(n)


// function calculateSum(sum,n){
//     if(n==10){
//         return sum = sum + n;
//     }
//     else{
//         sum = sum + n;
//         return calculateSum(sum,++n)
//     }
// }
// let sum = 0;
// let n = 1;
// let x = calculateSum(sum,n)
// console.log(x)




// function elementsArray(array,i){
//     if(i == (array.length -1)){
//         console.log(array[i]);
//     }
//     else{
//         console.log(array[i])
//         return elementsArray(array,++i)
//     }
// }

// let a = [13,54,25,43,87,52];
// let i=0;
// elementsArray(a,i)



// function Fibonacchi(n){
//     if(n==0){
//         return 0;
//     }
//     else if(n==1){
//         return 1;
//     }
//     else{
//         return Fibonacchi(n-1)+Fibonacchi(n-2)
//     }
// }

// let x = Fibonacchi(5)
// console.log(x)


// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1)
//     }
// }
// let x = factorial(5);
// console.log(x)


function largest(array,max,i){
    if (i==(array.length)){
        return max;
    }
    else if (array[i]>max){
        max = array[i]
         return largest(array,max,++i)
    }
    else{
        return largest(array,max,++i)
    }

}
let a = [3,2,1,7,6,5];
let max = a[0];
let i = 1;
let element = largest(a,max,i)
console.log(element)
