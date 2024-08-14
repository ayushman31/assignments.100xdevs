let time = new Date();

function calculateTime(n){
    let sum=0;
    const time1 = time.getMilliseconds();
    for(i=1 ; i<=n ; i++){
        sum = sum + i;
        if(i == n){
            const time2 = time.getMilliseconds();
            const ans = time2 - time1;
            console.log("Sum of first ",n,"numbers took ",ans," seconds");
        }}
    // console.log(time2);
    // console.log(time1);

    
}

calculateTime(100000000);


