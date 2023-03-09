// @ts-check
const express = require('express');

const router = express.Router();
const USER = {
  1: {
    id: 'mj',
    name: '김민정',
  },
  2: {
    id: 'test',
    name: 'test1',
  },
};
const USER_ARR = [
  {
    id: 'mj',
    name: '김민정',
    email: '1234@',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: '5678@',
  },
];

// http://localhost:4000/users
router.get('/', (req, res) => {
  res.render('users', { USER_ARR, userCounts: USER_ARR.length });
});

router.get('/id/:id', (req, res) => {
  if (!req.params.id) res.send('ID를 입력해 주세요');

  const Data = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});
router.put('/modify/id/:id', (req, res) => {
  // if (!req.query.id || !req.query.name)
  //   return res.send('쿼리 입력이 잘못 되었습니다.');

  // const modifyUser = USER[req.params.id];
  // modifyUser.id = [req.query.id];
  // modifyUser.name = [req.query.name];

  if (req.query.id && req.query.name) {
    if (req.params.id in USER) {
      USER[req.params.id] = {
        id: req.query.id,
        name: req.query.name,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
    }
  } else {
    res.send('잘못 된 쿼리 입력입니다.');
  }
});

router.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('회원 삭제 완료');
  } else {
    res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
  }
});

router.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name)
    return res.send('쿼리 입력이 잘못 되었습니다.');
  // send나 end 써도괜찮음
  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };

  USER[Object.keys(USER).length + 1] = newUser;

  // 프론트에게 응답 보내주기
  res.send('회원 등록 완료');
  // if (req.query.id && req.query.name) {
  //   const newUser = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };

  //   USER[Object.keys(USER).length + 1] = newUser;

  //   // 프론트에게 응답 보내주기
  //   res.send('회원 등록 완료');
  // } else {
  //   res.end('쿼리 입력이 잘못 되었습니다!');
  // }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER ID is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

// router.get('/ejs', (req, res) => {
//   const userCounts = USER_ARR.length;
//   res.render('index.ejs', { USER_ARR, userCounts });
// });

module.exports = router;
