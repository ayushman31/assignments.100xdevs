/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function wait(n) {
    for (let i = 0; i <= n * 99999; i++) {
        // Just to make the thread busy.
    }
}

function sleep(milliseconds) {
    return new Promise((resolve) => {
        wait(milliseconds); 
        resolve();  
    });
}

function doneWaiting(){
    console.log("Wait over.");
    
}

sleep(9999).then(doneWaiting());