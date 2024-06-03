import jwt from 'jsonwebtoken';

const gerateToken = (res, userId) => {
    const Token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '40d'
    });
    
    res.cookie('jwt', Token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 100
    })
};

export default gerateToken;