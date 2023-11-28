import express from 'express';
import { allRoutes } from './routes/index.js';
import { Player } from './classes/player/player.js';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.locals.player = new Player();

app.use('/', allRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});