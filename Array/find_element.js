function find_element(x){
    let a = [1,3,46,50,35,234,54];
    for(i=0;i<=a.length;i++){
        if(a[i] == x){
            return i
        }
    }

}
let index = find_element(50)
console.log(index)