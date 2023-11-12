import express from 'express';
import { allRoutes } from './routes/index.js';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use('/', allRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});