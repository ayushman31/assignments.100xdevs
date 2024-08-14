const fs = require("fs");
function write(data){
    fs.writeFile("example.txt", data, "utf-8",function(){
        fs.readFile("example.txt", "utf-8", function (err, contents) {
            console.log(contents);
          });
    });
}

write("enter your string here.")
