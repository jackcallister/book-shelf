import express from 'express';
import render from '../utils/render';

const router = express.Router();

const data = [
  { id: 1, title: 'Game of Thrones', isbn: 9780553386790 }
];

const payload = {
  BooksStore: { books: data, loading: false }
};

router.get('/', (req, res) => {
  render(res, payload, req.originalUrl);
});

export default router;
