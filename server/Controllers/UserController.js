import { validationResult } from "express-validator";
import ApiError from "../exceptions/ApiError.js";

class UserController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password} = req.body
            await UserService.registration(email, password);
            return res.json({message: 'Пользователь создан'})
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController();