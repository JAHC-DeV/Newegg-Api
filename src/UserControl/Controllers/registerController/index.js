const { User, Address, Role } = require('../../Models');
const RegisterDto = require('../../Models/Dto/registerDto');
const { userExistByDto, createNewUser } = require('../../Services/userService')

async function post(req, res) {
    const { name, nickname, email, password, photo_cover, photo_profile, province, city, street } = req.body;
    const userRegiter = new RegisterDto(name, nickname, email, password, photo_cover, photo_profile, province, city, street);
    try {
        const exist = await userExistByDto(userRegiter);
        if (exist == true)
            await createNewUser(userRegiter);        
        res.status(200).json({ status: true, msg: "Usuario creado correctamente pofavor verifique su correo para activar la cuenta" });
    } catch (error) {
        res.json({ status: false, msg: error.msg });
    }
}

module.exports = { post };