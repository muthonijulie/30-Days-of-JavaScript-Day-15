function cancellable(fn,args,t){
    fn(...args);
    let timer = setInterval(()=> fn(...args),t);

    let cancelFn = () => clearInterval(timer)
    return cancelFn;
     }
     const start = performance.now();
     
       const log = (...argsArr) => {
           const diff = Math.floor(performance.now() - start);
           result.push({"time": diff, "returned": fn(...argsArr)});
       }
 //example 1
//  const fn = (x) => {
//     const result = x * 2;
//     console.log(result);
//     return result;
// };
//  const cancelFn=cancellable(fn,[4], 35);
//  setTimeout(cancelFn, 190);

//example 2
// const  fn = (x1, x2) => {
//     const result =x1 * x2;
//     console.log(result);
//     return result;
// };
// const cancelFn=cancellable(fn, [2, 5], 30);
//  setTimeout(cancelFn, 150);

 //example 3
 const  fn = (x1, x2, x3)  => {
    const result = x1 + x2 + x3;
    console.log(result);
    return result;
};
const cancelFn=cancellable(fn,  [5, 1, 3], 50);
 setTimeout(cancelFn, 180);

 