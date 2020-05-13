import * as express from 'express';

const app = express();

app.all('/catch/match', (req, res) => {
  console.log(req);
});

app.listen(4002, (err) => {
  console.log(`[${new Date().toLocaleString()}]\tServer started and listen on PORT: 4002`);
});