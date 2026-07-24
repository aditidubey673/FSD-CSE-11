const a=[1,2,3,45,6,7];
const even=a.filter((i)=>(i%2==0));
console.log("a=",a);
console.log("even=",even);
const square=even.map((i)=>i*i);
console.log("Square=",square);
const sum=square.reduce((i,s)=>(i+s));
console.log("sum=",sum);