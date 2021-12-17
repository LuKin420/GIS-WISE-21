"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const hostname = "127.0.0.1"; //localhost
const port = 3000; //Port
const server = http.createServer(//Server definiert
(request, response) => {
    response.statusCode = 200; //definieren statuscode
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Access-Control-Allow-Origin", "*"); // wo response erreichbar ist
    //Routing
    let url = new URL(request.url || "", `http://${request.headers.host}`); //URL object definiert
    switch (url.pathname) { //welcher path will erreicht werden?
        case "/":
            response.write("Server erreichbar");
            break;
        case "/convertDate":
            response.write(url.searchParams.get("name") || "Datum eingeben");
            break;
        default:
            response.statusCode = 404;
    }
    response.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
}); //der Server soll lauschen
//# sourceMappingURL=server.js.map