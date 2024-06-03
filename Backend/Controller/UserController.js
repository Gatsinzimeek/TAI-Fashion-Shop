import asyncHandler from 'express-async-handler';
import User from '../Models/Users.js';
import gerateToken from '../utils/generateToken.js'; 
// route POST /api/user/auth
export const AuthUser = asyncHandler(async (req, res) => {

    res.status(200).json({
        message: 'Auth user'
    })
});

// route POST /api/user

export const RegisterUser = asyncHandler(async (req, res) => {
    const {Email, name, password} = req.body;

    const Userexit = await User.findOne({Email});

    if(Userexit) {
        res.status(400);
        throw new Error('User exit in Our Database');
    }

    const user = await User.create({
        name,
        Email,
        password
    })

    if(user) {

        gerateToken(res,user._id)
        res.status(201).json({
            id: user._id,
            name: name,
            Email: Email,
        })
    }else{
        res.status(400);
        throw new Error('Invalid User Data');
    }
    res.status(200).json({
        message: 'Register user'
    })
});

// route POST /api/user/logout

export const LogoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Logout user'
    })
});

// route GET /api/user/profile
export const GettingUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({
        message: 'Receive User Profile'
    })
});


// route PUT /api/user/profile
export const UpdatedUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({
        message: 'Upadate User Profile'
    })
});
