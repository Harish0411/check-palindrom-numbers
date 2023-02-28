/ check number is palindroms

let a = Number(prompt("enter number to check palindrom or not?")),c=0;
let initial =a;
while(a>0){
    b=a%10;
	a=parseInt(a/10);
	c=c*10+b;
}
if(c == initial){
     console.log(`${initial} is palindrom number`);
}
else{
    console.log(`${initial} is not a palindrom number`);
}