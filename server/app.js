import express from 'express';
import path from 'path';
import jsx from 'node-jsx';
import render from './utils/render';
import api from './routes/api';
import books from './routes/books';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 1912;

jsx.install({
  extension: '.jsx'
});

app.set('views', 'server/views/');
app.set('view engine', 'ejs');

app.use('/scripts', express.static(path.join(__dirname, '../dist/scripts')));

app.use(bodyParser.json());

app.use('/api', api);
app.use('/', books);

app.listen(port, () => {
  console.log('listening on *:' + port);
});
