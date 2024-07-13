import { User } from "../db/models/User.js";
import ApiError from "../exceptions/ApiError.js";
import bcrypt from 'bcrypt'


class UserService {
    async registration(email, password) {
        const candidate = User.findOne({where: {email}})
        if(candidate) {
            throw ApiError.BadRequest(`Пользователь c email - ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await User.create({email, password: hashPassword})
        return user;
    }   
}

export default UserService();