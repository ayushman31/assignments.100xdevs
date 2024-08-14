function counter(n){
    
    for(let count = 1 ; count<=10 ; count++) {
        setTimeout(() => {
            console.log(count);  
        }, count*1000);
        
    }
}

counter(10);