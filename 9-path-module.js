const path= require('path');
const pathFolder=path.join('/folder/','subfolder/','file.txt');
console.log(pathFolder);
console.log(path.basename(pathFolder));
const abs=path.resolve(__dirname,'folder','subfolder','file.txt');
const abs2=path.resolve(__dirname,'app.js/');
console.log(abs);
console.log(abs2);