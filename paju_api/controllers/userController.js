const User = require('../models/user');

exports.registerUser = async (req, res) => {
    try {
        console.log(req.body);
        const { id, name, email, password } = req.body;
        const newUser = await User.create({
            id,
            name,
            email,
            password
        });
        res.status(201).json(newUser);
    }
    catch (error) { // 에러 객체를 error 변수에 할당
        console.log('등록 실패');
        res.status(404).json({ message: '등록에 실패했습니다.', error }); // 에러 객체를 직접 사용
    }
};

//로그인 
exports.loginUser = async (req, res) => {
    try{
        const { id, password } = req.body;
        const user = await User.findOne({
            where : {
                id : id
            }
        });

        if(!user) {
            return res.status(404).json({ error : '사용자를 찾을 수 없습니다.' });
        }

        if(user.password !== password){
            return res.status(404).json({ error : '비밀번호가 일치하지 않습니다.' });
        }

        res.status(200).json({ message : '로그인 성공', user : user });
    }
    catch {
        console.log('로그인 실패');
        res.status(500),json({ error : '로그인에 실패했습니다.' });
    }
}
