
function fibonacchi(n){
    if(n==1){
        return 1;
    }
    else if(n==0){
        return 0;
    }
    else{
        return fibonacchi(n-1)+fibonacchi(n-2)
    }

}

let x = fibonacchi(4)
console.log(x)