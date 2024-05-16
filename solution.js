function cancellable(fn,args,t){
   console.log(fn(...args));
    const intervalId=setInterval(()=>{console.log(fn(...args));},t);
    return function cancelFn(){
        clearInterval(intervalId);
    };
}
   
 //example 1
//  const fn = (x) =>  x * 2;
    
//  const cancelFn=cancellable(fn,[4], 35);
//  setTimeout(cancelFn, 190);

//example 2
// const  fn = (x1, x2) => x1 * x2;
    
// const cancelFn=cancellable(fn, [2, 5], 30);
//  setTimeout(cancelFn, 150);

 //example 3
 const  fn = (x1, x2, x3)  => x1 + x2 + x3;
    
const cancelFn=cancellable(fn,  [5, 1, 3], 50);
 setTimeout(cancelFn, 180);

 //setInterval
 function sayHello(name){
    console.log("Hello" +name);
 }
 const intervalId=setInterval(sayHello,2000,"Muthoni");
setTimeout(()=>{clearInterval(intervalId);},8000);
 