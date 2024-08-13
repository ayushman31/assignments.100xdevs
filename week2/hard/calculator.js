class Calculator{
    constructor(result){
        this.result = result;
    }

    add(n){
        this.result += n;
        return this.result;
    }

    subtract(n){
        this.result -= n;
        return this.result;
    }

    multiply(n){
        this.result *= n;
        return this.result;
    }

    divide(n){
        this.result /= n;
        return this.result;
    }

    clear(){
        this.result = 0;
        return this.result;
    }

    getResult(){
        return this.result; 
    }

    calculate(string){
        const newString = string.split(" ").filter((x) => x != '')
        
        console.log(newString);

        for(i=0 ; i<newString.length ; i++){
            if(newString[i] == '')
        }
    }
}

const equation = new Calculator(0);
console.log(equation.add(5));
console.log(equation.add(10));
console.log(equation.calculate("5 + 34 + 67- 45 * 56 + 67"));

