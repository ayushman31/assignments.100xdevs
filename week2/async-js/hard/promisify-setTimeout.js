/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const ans = new Promise(resolve => setTimeout(resolve, n*1000));
    return ans;
      
}

function fn(){
    console.log("promise has been resolved.");
    
}

wait(4).then(fn);
//wait(4).then(() => console.log("resolved")); //alternative way
