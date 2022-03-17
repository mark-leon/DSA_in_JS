
let a = [7,10,4,20,15];
let k = 4

for(i=0;i<a.length-1;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]> a[j]){
            let temp= a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
}

console.log(a)
console.log(a[k-1])