import * as http from"http";

namespace Server {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3000; //port

    const server: http.Server = http.createServer(
        (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Origin", "*");

            //Routing
            let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

            switch (url.pathname) {
                case "/":
                    response.write("Hello World");
                    break;
                case "/greetings":
                    let name: string = url.searchParams.get("name");
                    console.log(name);
                    response.write("Hello " + name + ", nice to meet ya!");
                    break;
                default:
                    response.statusCode = 404; 
            }
            response.end();
        }
    );

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });

}