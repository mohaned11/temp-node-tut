const http=require('http');
const { rawListeners } = require('process');
const server=http.createServer((req,res) => {
    if(req.url==='/'){
    res.end('welcome to homepage');
}
    if(req.url==='/about'){
    res.end('welcome to about page');

}
   else{res.end(`<h1>Oops!</h1>
   <p>Page not found</p>
   <a href="/">back home</a>`);}
})
server.listen(3000);