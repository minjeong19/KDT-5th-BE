// @ts-check
const express = require('express');

const userRouter = require('./routes/users');

const app = express();

const PORT = 4000;

app.set('view engine', 'ejs');

// app이 처리하지않고 userRouter가 처리
// console.log(__dirname);
app.use(express.static('public'));
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express world!');
});

// http://localhost:4000/users
// http://127.0.0.1:4000/users    postman으로 봤을 대 회원목록뜸

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
