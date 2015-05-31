import express from 'express';
import render from '../utils/render';

const router = express.Router();

const data = [
  { id: 1, title: 'Game of Thrones' },
  { id: 2, title: 'Born to Run' },
];

const payload = {
  BooksStore: { books: data, loading: false }
};

router.get('/', (req, res) => {
  render(res, payload, req.originalUrl);
});

export default router;
