
// function Natural_number(n){
//     // for(i= 1;i<= n;i++){
//     //     console.log(i)
//     // }
//     let i = 0;
//     if(i != n){
//         i= i+1
//         return Natural_number(i)
//     }
   


// } 


// let x= Natural_number(30)
// console.log(x)


class Node{
    constructor(element){
        this.element = element
        this.next = null 
    }
}

class LinkedList{
    constructor(){
        this.head= null
        this.size= 0
    }

    add(element){
        var node= new Node(element)  //LinkedList { head: null, size: 0 }
        var current;
        if (this.head == null){
            this.head = node;        //LinkedList { head: Node { element: 5, next: null }, size: 0 }

        }
        else {
			current = this.head;   //After add one element, current points to head , LinkedList { head: Node { element: 5, next: null }, size: 0 }
        
        while (current.next) {
            current = current.next;
        }

        // add node
        current.next = node;    //LinkedList {
                                //head: Node { element: 5, next: Node { element: 6, next: null } },
                                //size: 2
                                 // }
    }

    this.size++;

    }

}

let u = new LinkedList()
//u.add(5)
// u.add(6)
// u.add(8)
//console.log(u)


// let j= 5
// let i = 3
// let temp = i
// i = j  
// j  = temp
// console.log(j)
// console.log(i) 


//Left Shift Array


// let a = [1,2,3,4,5,6];
// for(i=0;i<a.length -1;i++){
//     a[i] = a[i+1]
// }
// a[a.length-1] = -1
// console.log(a)



// Right Shift

// let a = [1,2,3,4,5,6];
// for(i=a.length -1;i>0;i--){
//     a[i] = a[i-1]
// }
// a[0] = -1;
// console.log(a)



// Array Copy

// let a = [12,566,4,5,34]
// let b = [];
// a[5] = 8
// for(let i= 0;i<a.length;i++){
//     b[i] = a[i];
// }
// console.log(b)
// console.log(a)

//Left Shift

// let a = [1,2,3,4,5];
// let temp = a[0]
// for(let i = 0;i<a.length;i++){
//     a[i] = a[i+1]
// }
// a[a.length-1] = temp;
// console.log(a)

//Right Shift

// let a = [1,2,3,4,5];
// let temp = a[a.length-1];
// for(let i = a.length-1;i>0;i--){
//     a[i] = a[i-1]
// }
// a[0] = temp
// console.log(a)



// function removeItem(index){
//     let a = [1,2,3,4,5]
//     for(let i =index;i<a.length;i++){
//         a[i] = a[i+1]
//     }
//     //console.log(a[a.length-2])
//     return a;
// }
// let item = removeItem(2)
// console.log(item)


//a = [1,2,3,6,4,5] 
//index = 3

// function addItem(index,element){
//     let a = [1,2,3,4,5]
//     let b = [];
//     for(let i =0;i<index;i++){
//         b[i] = a[i]
//     }
//     for(let i =index;i<a.length;i++){
//         b[i+1] = a[i]
//     }
//     b[index] = element
//     return b;
// }
// let item = addItem(3,6)
// let item2 = addItem(3,8)
// console.log(item2)


// function binarySearch(arr,l,r,element){
//     if (r>=l){
//         let mid = Math.floor((l+r)/2)
//         console.log(mid)
//         if(arr[mid] == element){
//             return true
//         }
//         else if (arr[mid] > element){
//             return binarySearch(arr,l,mid-1,element)
//         }
//         else {
//             return binarySearch(arr,mid+1,r,element)
//         }

//     }
  
//     else{
//         return -1;
//     }

// }
// //let a = [1,2,3,4,5,6,7,8,9]; mid 5, index = 4 (0,8)
// //let a = [1,2,3,4,5,6,7,8,9,10]; mid 5 index = 4 (0,9)
// let a = [1,2,3,4,5,6,7,8];
// let item = binarySearch(a,0,a.length,89);
// console.log(item)




// Selection Sort

// let a = [1,3,66,36,373.5,2,9];

// for(let i =0;i<a.length;i++){
//     for(j  = i+1;j<a.length;j++){
//         if(a[i] > a[j]){
//             let temp = a[j]
//             a[j] = a[i]
//             a[i] = temp
//         }
//     }    
// }
// console.log(a)



// let s = "tania"
// if(s.length>10){
//     for(let i = 0;i<s.length;i++){
//         console.log(s[i])
//     }
// }


// let x = 25;
// let y = 3;
// let z = 10;

// function findMax(x,y,z){
//     let max = 0;
//     if(x>y){
//         max = x;
//         if(x>z){
//             max = x;
//         }
//         else{
//             max = z;
//         }
//     }
//     else{
//         if(y>z){
//             max = y;
//         }
//         else{
//             max = z;
//         }
       
//     }
//     return max;

// }

// let result = findMax(x,y,z)
// console.log(result)



// let x = 5;
// let str = "";
// for(let i = 0;i<=x -3;i++){
//     for(let j= 0;j<=x;j++){
//         str = str+"x";
//     }
//     str = str+"\n";
// }
// console.log(str)


// let x = 5;
// let str = "";
// for(let i =0;i<= x;i++){
//     for(let j= 0;j<=9;j++){
//         if(i==0||i==x||j==0||j==9){
//             str = str+"*";
//         }
//         else{
//             str = str+" ";
//         }
//     }
//     str = str+"\n";
// }
// console.log(str)


// let x = 5;
// let str = "";
// for(let i=0;i<=x;i++){
//     for(let j=0;j<=i;j++){
//         str= str+"*";
//     }
//     str = str+"\n";
// }
// console.log(str)

// var size = 3;
// var myArray = Array(size).fill( Array(size).fill(6) );

// console.log(myArray);

// var matrix = [];
// for(var i=0; i<9; i++) {
//     matrix[i] = new Array(9);
// }
// console.log(matrix)





// let x = 5;
// let str = "";
// for(let i=0;i<=x;i++){
//     for(let j=5;j>=0;j--){
//         str= str+"*";
//     }
//     str = str+"\n";
// }
// console.log(str)





let s = "kbcdeedcbk";
let k = Math.ceil(s.length/2) -1;
let j = s.length - 1
for(let i = 0;i<= k; i++,j--){
    if(s[i] != s[j]){
        break;
    }
}

if( j==k && s.length %2 ==0){
   console.log("Palindrome String")
}

else if( j==k-1 && s.length %2 !=0){
    console.log("Palindrome String")
 }
else{
    console.log("Not Palindrome String")
}