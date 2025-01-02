const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === "/prev")
    {
        res.end("Opps its still 2024 !!");
    }
    res.end("Happy New Year !!!");
});

server.listen(2025);

