const http = require("http");

const server = http.createServer();


server.on('request',(req, res) => {
    const items = req.url.split("/");

    const list = [{id:0, name: "Apple"}, {id:1, name:"Bat"}, {id:2, name: "Cat"}];

    if ( items[1] === "friends") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });

        if(items.length === 3){
            return res.end(JSON.stringify(list[items[2]]));

        }else{
            return res.end(JSON.stringify(list));

        }

    } else if (items[1] === "messages") {

        res.setHeader('Content-type','text/html')

        res.write("<html>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li> Hello Osama</li>");

        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }
})

server.listen(8080);
