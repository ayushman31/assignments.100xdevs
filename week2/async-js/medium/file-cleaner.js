/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */

const fs = require("fs");

fs.readFile("example.txt" , "utf-8" , function(err, contents){
    const arr = contents.split(" ").filter((x) => x != "");
    const ans = arr.join(" ");
    console.log(ans);
    
    
})