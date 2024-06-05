import jwt from 'jsonwebtoken'
import User from '../Models/Users.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;
    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');

            next();
        }catch(erro){
            res.status(401);
            throw new Error('Not Authorized, invalid token')
        }
    }else{
        res.status(401)
        throw new Error('Not Authorized, no token')
    }
})

export {protect} 