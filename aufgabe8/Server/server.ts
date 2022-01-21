import * as http from "http";
import * as mongo from "mongodb";

namespace Server_8 {
    
    const hostname: string = "127.0.0.1";
    const port: number = 3000;
    const mongoUrl: string = "mongodb://localhost:27017";
    let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

    // async function dbFind (
    //     db: string,
    //     collection: string,
    //     requestObject: any,
    //     response: http.ServerResponse
    // ) {
    //     let result = await mongoClient
    //     .db(db)
    //     .collection(collection)
    //     .find(requestObject)
    //     .toArray();

    //     response.setHeader("Content-Type", "application/json");
    //     response.write(JSON.stringify(result));
        
    // }

    const server: http.Server = http.createServer(
        async (request: http.IncomingMessage, response: http.ServerResponse) => {
            response.statusCode = 200;

            response.setHeader("Access-Control-Allow-Origin", "*");

            let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
            switch (url.pathname) {
                case "/events": {
                    await mongoClient.connect();
                    switch (request.method) {
                        case "GET":
                            const data: Object = await mongoClient.db("interpret").collection("price").find().toArray();
                            // console.log(data);
                            response.setHeader("content-type", "json; charset=utf-8");
                            response.write(JSON.stringify(data));
                            // await dbFind(
                            //     "interpret",
                            //     "price",
                            //     {},
                            //     response
                                
                            // );
                            break;
                        case "POST":
                            let jsonString = "";
                            request.on("data", data => {
                                jsonString += data.toString();
                            });
                            request.on("end", async () => {
                                mongoClient
                                .db("interpret")
                                .collection("price")
                                .insertOne(JSON.parse(jsonString));
                            });
                            break;
                    }
                    break;
                }
                default:
                    response.statusCode = 404;
            }
            response.end();
        }
    );

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });

}