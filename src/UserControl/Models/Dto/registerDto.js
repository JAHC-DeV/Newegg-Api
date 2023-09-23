module.exports = class RegisterDto {
    constructor(name, nickname, email, password, photo_cover, photo_profile, province, city, street) {
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.photo_cover = photo_cover;
        this.photo_profile = photo_profile;
        this.province = province;
        this.city = city;
        this.street = street;
    }
}

