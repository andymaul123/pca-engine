
import * as http from "http";
import { promises as fsp } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const host = 'localhost';
const port = 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));


const requestListener = async function (request, response) {

    response.setHeader("Content-Type", "text/html");

    try {
        switch (request.url) {
            case "/interactivity.js": {
                response.setHeader("Content-Type", "application/javascript ");
                response.writeHead(200);
                const script = await fsp.readFile(__dirname + "/js/interactivity.js");
                response.end(script);
                break;
            }
            case "/typewriter.js": {
                response.setHeader("Content-Type", "application/javascript ");
                response.writeHead(200);
                const script = await fsp.readFile(__dirname + "/js/typewriter.js");
                response.end(script);
                break;
            }
            case "/menu1": {
                response.writeHead(200);
                const menu = await fsp.readFile(__dirname + "/menu1.html");
                response.end(menu);
                break;
            }
            case "/scenes/shrine": {
                response.writeHead(200);
                const scene = await fsp.readFile(__dirname + "/scenes/shrine.html");
                response.end(scene);
                break;
            }
            case "/scenes/replacements": {
                response.writeHead(200);
                const scene = await fsp.readFile(__dirname + "/scenes/replacements.html");
                response.end(scene);
                break;
            }
            case "/shrine-no-candle.png": {
                response.setHeader("Content-Type", "image/png");
                response.writeHead(200);
                const shrineImg = await fsp.readFile(__dirname + "/assets/image/shrine-no-candle.png");
                response.end(shrineImg);
                break;
            }
            case "/shrine-final.gif": {
                response.setHeader("Content-Type", "image/gif");
                response.writeHead(200);
                const shrineImg = await fsp.readFile(__dirname + "/assets/image/shrine-final.gif");
                response.end(shrineImg);
                break;
            }
            case "/cursor.png": {
                response.setHeader("Content-Type", "image/png");
                response.writeHead(200);
                const cursor = await fsp.readFile(__dirname + "/assets/image/cursor.png");
                response.end(cursor);
                break;
            }
            case "/css/index.css": {
                response.setHeader("Content-Type", "text/css");
                response.writeHead(200);
                const css = await fsp.readFile(__dirname + "/css/index.css");
                response.end(css);
                break;
            }
            case "/css/text-overlay.css": {
                response.setHeader("Content-Type", "text/css");
                response.writeHead(200);
                const css = await fsp.readFile(__dirname + "/css/text-overlay.css");
                response.end(css);
                break;
            }
            case "/Kingdom-in-Despair.mp3": {
                response.setHeader("Content-Type", "audio/mpeg");
                response.writeHead(200);
                const mp3 = await fsp.readFile(__dirname + "/assets/audio/Kingdom-in-Despair.mp3");
                response.end(mp3);
                break;
            }
            default: {
                const staticHtml = await fsp.readFile(__dirname + "/index.html");
                response.writeHead(200);
                response.end(staticHtml); 
            }

        }

    } catch(error) {
        console.log(error);
        response.writeHead(200);
        response.end(`<html><body><h1>ERROR PAGE</h1></body></html>`);
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


