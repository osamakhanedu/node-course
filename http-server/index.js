const http = require("http");

const server = http.createServer();


server.on('request',(req, res) => {
    if (req.url === "/friends") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });

        res.end(JSON.stringify({ id: 1, name: "ABC apple" }));
    } else if (req.url === "/messages") {

        res.setHeader('Content-type','text/html')

        res.write("<html>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li> Hello Osama</li>");

        res.write("</html>");
        res.write("</body>");
        res.write("</ul>");
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }
})

server.listen(8080);
