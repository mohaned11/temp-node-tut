const {readFile,writeFile} = require('fs');
readFile('./folder/first.txt','utf8',(err,result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first=result;
    readFile('./folder/second.txt','utf8',(err,result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        const second=result;
        console.log(first,second);
        writeFile('./folder/result-async.txt',`result: ${first}, ${second}`,{flag:'a'},(err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("success");
        })
    })
})
console.log('  next')