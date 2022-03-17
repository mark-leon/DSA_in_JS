function recursion(n){
    if(n==0){
        return 1;
    }
    else{
        return n*recursion(n-1)
    }

}
let x = recursion(10)
console.log(x)



