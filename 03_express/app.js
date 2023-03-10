// @ts-check
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 4000;

const mainRouter = require('./routes');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

// app이 처리하지않고 userRouter가 처리
// console.log(__dirname);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// localhost:4000
app.use('/', mainRouter);
// localhost:4000/users
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express world!');
});

// http://localhost:4000/users
// http://127.0.0.1:4000/users    postman으로 봤을 대 회원목록뜸

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<br><a href="/">홈으로</a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
