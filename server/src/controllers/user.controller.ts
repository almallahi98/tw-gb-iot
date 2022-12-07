import { Request, Response } from "express";
import { user } from '@prisma/client'
import { dbcontext } from "../context/context.db";
import argon2 from 'argon2';
import * as jwt from 'jsonwebtoken'
import { IUser } from "../middelware/auth/auth";

const messege = 'username or password isnt correct..';
export const Login = async (req: Request, res: Response) => {
    const { username, password } = req.body as user;
    try {
        const user = await dbcontext.user.findUnique({ where: { username } }) as user
        if (!user) {
            return res.status(400).json({ msg: 'username or password isnt correct..' });
        }
        const isValied = await argon2.verify(user.password, password);
        if (!isValied) {
            return res.status(400).json({ msg: messege });
        }
        const jwt_user: IUser = { username: user.username, user_id: user.user_id };
        const token = jwt.sign(jwt_user, process.env.SECRET_KEY as string);
        return res.status(200).json({
            msg: 'welcome back..',
            token: token
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({msg:messege});
    }
}