const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // 여기에 회원가입 처리 로직을 구현합니다.
    // 데이터베이스에 회원 정보를 저장하고, 성공 또는 실패에 따른 응답을 보냅니다.

    if (email && password) {
        // 회원가입 성공
        res.status(200).send('회원가입 성공!');
    } else {
        // 필수 정보 누락
        res.status(400).send('이메일과 비밀번호를 모두 입력해주세요.');
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
