import express from 'express';

const router = express.Router();

// Fake data!
const data = { id: 3, title: 'Sapiens' };

router.post('/new', (req, res) => {
  res.json(data);
});

export default router;
