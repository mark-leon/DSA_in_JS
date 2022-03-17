
let a = [3,53,6,4,64,67,3,3,56];
let min = a[0]
let max = a[0]
for(i=1;i<a.length;i++){
    if(a[i]> max){
        max = a[i]
    }
}
for(i=1;i<a.length;i++){
    if(a[i]<min){
        min = a[i]
    }
}

console.log(min)
console.log(max)

