/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

async function calculateTime(t1, t2, t3) {
    let t=0;
    await wait1(t1);
    t = t+t1;
    console.log(t/1000, "s passed");
    
    await wait2(t2);
    t=t+t2;
    console.log(t/1000, "s passed");

    await wait3(t3);
    t=t+t3;

    console.log("total time: ", t/1000, "s");
    
    
    // const f1 = wait1(t1).then(() => {
    //     var t=0;
    //      t = t+t1;
    //     console.log(t, " passed")
    // });
    // const f2 = wait1(t2).then(() => {
        
    //      t = t+t2;
    //     console.log(t, " passed")
    // });
    // const f3 = wait1(t3).then(() => {
    //      t = t+t3;
    //     console.log(t, " passed")
    // });

   
}

calculateTime(1000,5000,3000);
