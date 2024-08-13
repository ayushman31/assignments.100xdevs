const str = "helleh";

function isPalindrome(str){
    let arr = [...str];
    if(arr == arr.reverse()) console.log("palindrome");
    else console.log("not palindrome");
}

isPalindrome(str)
