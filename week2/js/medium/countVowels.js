/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


const Str = "Hello uncle namaste , direct kaam ki baat pe aate hain."

function countVowels(str) {
    str.toLowerCase();
    let arr = [...str];
    const ans = arr.reduce(function(acc , curr){
        if(curr == 'a' || curr == 'e' || curr == 'i' ||curr ==  'o' || curr == 'u') acc.push(curr);
        return acc
    }, [])
    console.log(ans.length);
}

countVowels(Str);