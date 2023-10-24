
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
                const script = await fsp.readFile(__dirname + "/interactivity.js");
                response.end(script);
                break;
            }
            case "/typewriter.js": {
                response.setHeader("Content-Type", "application/javascript ");
                response.writeHead(200);
                const script = await fsp.readFile(__dirname + "/typewriter.js");
                response.end(script);
                break;
            }
            case "/dungeon": {
                response.writeHead(200);
                const dungeonFragment = await fsp.readFile(__dirname + "/dungeon.html");
                response.end(dungeonFragment);
                break;
            }
            case "/basemat-shrine-png": {
                response.writeHead(200);
                const imgFragment = await fsp.readFile(__dirname + "/basemat-shrine-png.html");
                response.end(imgFragment);
                break;
            }
            case "/shrine-no-candle.png": {
                response.setHeader("Content-Type", "image/png");
                response.writeHead(200);
                const shrineImg = await fsp.readFile(__dirname + "/shrine-no-candle.png");
                response.end(shrineImg);
                break;
            }
            case "/shrine-final.gif": {
                response.setHeader("Content-Type", "image/gif");
                response.writeHead(200);
                const shrineImg = await fsp.readFile(__dirname + "/shrine-final.gif");
                response.end(shrineImg);
                break;
            }
            case "/message": {
                response.writeHead(200);
                const shrineMessage = await fsp.readFile(__dirname + "/shrine-message.html");
                response.end(shrineMessage);
                break;
            }
            case "/window-message": {
                response.writeHead(200);
                const windowMessage = await fsp.readFile(__dirname + "/window-message.html");
                response.end(windowMessage);
                break;
            }
            case "/shrine-overlay-empty": {
                response.writeHead(200);
                const shrineOverlayEmpty = await fsp.readFile(__dirname + "/shrine-overlay-empty.html");
                response.end(shrineOverlayEmpty);
                break;
            }
            case "/cursor.png": {
                response.setHeader("Content-Type", "image/png");
                response.writeHead(200);
                const cursor = await fsp.readFile(__dirname + "/cursor.png");
                response.end(cursor);
                break;
            }
            case "/guiTest.css": {
                response.setHeader("Content-Type", "text/css");
                response.writeHead(200);
                const css = await fsp.readFile(__dirname + "/guiTest.css");
                response.end(css);
                break;
            }
            case "/Kingdom-in-Despair.mp3": {
                response.setHeader("Content-Type", "audio/mpeg");
                response.writeHead(200);
                const mp3 = await fsp.readFile(__dirname + "/Kingdom-in-Despair.mp3");
                response.end(mp3);
                break;
            }
            default: {
                const staticHtml = await fsp.readFile(__dirname + "/guiTest.html");
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


