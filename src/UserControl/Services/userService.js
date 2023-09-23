const { User, Address } = require('../Models');
const { Op } = require('sequelize');
const RegisterDto = require('../Models/Dto/registerDto');

async function createNewUser(registerDto) {
    const countUser = await User.count();
    console.log(countUser);
    const userData = {
        name: registerDto.name,
        nickname: registerDto.nickname,
        photo_cover: registerDto.photo_cover,
        photo_profile: registerDto.photo_profile,
        email: registerDto.email,
        password: registerDto.password,
        role: countUser == 0 ? 1 : 2,
        isEnable: countUser == 0 ? true : false, // Opcional: puedes establecer el valor por defecto o proporcionar uno propio
    };
    const newUser = new User(userData);
    const user = await newUser.save();
    console.log(user.dataValues.id);
}

async function userExistByNickname(nickname) {
    try {
        const countUser = await User.count({ where: { [Op.and]: [{ nickname }] } });
        return countUser;
    } catch (error) {
        throw {mgs: "Error interno porfavor espere y vuelvalo a intentar."};
    }
}
async function userExistByEmail(email) {
    try {
        const countUser = await User.count({ where: { [Op.and]: [{ email }] } });
        return countUser;
    } catch (error) {
        throw {mgs: "Error interno porfavor espere y vuelvalo a intentar."};
    }
}

async function userExistById(id) {

}

async function userExistBySession(token) {

}

async function userExistByDto(registerDto) {
    try {
        const isEmail = await userExistByEmail(registerDto.email)
        if (isEmail > 0)
            throw { msg: "El email elegido se encuentra en uso" };
        const isNickname = await userExistByNickname(registerDto.nickname)
        if (isNickname > 0)
            throw { msg: "El nickname elegido se encuentra en uso" };
    } catch (error) {
        throw error;
    }
    return true;
}

module.exports = { userExistById, userExistByNickname, userExistBySession, userExistByEmail, userExistByDto, createNewUser }