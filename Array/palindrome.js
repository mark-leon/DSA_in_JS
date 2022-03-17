let s = "abcdeedcba";
let k = Math.ceil(s.length/2) -1;
let j = s.length - 1
for(let i = 0;i<= k; i++,j--){
    if(s[i] != s[j]){
        break;
    }
}

if( j==k && s.length %2 ==0){
   console.log("Palindrome Number")
}

else if( j==k-1 && s.length %2 !=0){
    console.log("Palindrome Number")
 }
else{
    console.log("Not Palindrome Number")
}