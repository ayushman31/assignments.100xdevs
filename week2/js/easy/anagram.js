/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const isAnagram = function(Str1 , Str2){
    let str1 = [...Str1].sort();
    let str2 = [...Str2].sort();
    
    if (str1.length == str2.length){
        var c=0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] == str2[i]) c++;
        }
        if (c == str1.length) {
            console.log("Given strings are anagram.");
        }
        else{
            console.log("Given strings are not anagram.");
        }
    }
    else{
        console.log("Given strings are not anagram.");
    }


}

isAnagram("angel","glean")