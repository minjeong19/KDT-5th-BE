const express = require('express');

const router = express.Router();

const POSTS = [
  {
    title: 'title',
    content: 'test',
  },
  {
    title: 'title2',
    content: 'test2',
  },
];

router.get('/', (req, res) => {
  res.render('posts', { POSTS, postCounts: POSTS.length });
});

router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POSTS.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('폼 데이터 입력을 확인 하세요.');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력되지 않았습니다.');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
