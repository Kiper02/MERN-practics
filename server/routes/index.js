import { Router } from "express";
import { User } from "../db/models/User.js";
import UserController from "../Controllers/UserController.js";
import { check } from "express-validator";

const router = new Router()


router.post('/registration', 
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Password must be longer than 3 adn shorter than 12').isLength({min: 3, max: 12})
    ], 
    UserController.registration)


export default router;