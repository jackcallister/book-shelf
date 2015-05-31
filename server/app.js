import express from 'express';
import path from 'path';
import jsx from 'node-jsx';
import render from './utils/render';
import books from './routes/books';

const app = express();
const port = process.env.PORT || 1912;

jsx.install({
  extension: '.jsx'
});

app.set('views', 'server/views/');
app.set('view engine', 'ejs');

app.use('/scripts', express.static(path.join(__dirname, '../dist/scripts')));

app.use('/', books);

app.listen(port, () => {
  console.log('listening on *:' + port);
});
