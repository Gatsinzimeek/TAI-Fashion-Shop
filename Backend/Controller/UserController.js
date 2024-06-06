import asyncHandler from 'express-async-handler';
import User from '../Models/Users.js';
import gerateToken from '../utils/generateToken.js'; 
// route POST /api/user/auth
export const AuthUser = asyncHandler(async (req, res) => {

    const {Email, password} = req.body;
    const user = await User.findOne({Email});
    if(user && (await user.matchpassword(password))) {
        gerateToken(res,user._id)
        res.status(201).json({
            id: user._id,
            name: user.username,
            Email: user.Email
        })
    }else{
        res.status(401);
        throw new Error('Invalid username or password')
    }

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
    res.cookie('jwt','', {
        httpOnly: true,
        expires: new Date(0),
    })


    res.status(200).json({
        message: 'user Logout',
    })
});

// route GET /api/user/profile
export const GettingUserProfile = asyncHandler(async (req, res) => {
    console.log(req.user);
    res.status(200).json({
        message: 'Receive User Profile'
    })
});


// route PUT /api/user/profile
export const UpdatedUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id);

    if(user) {
        user.Email = req.body.Email || user.Email;
        user.name = req.body.name || user.name;
        if(req.body.password){
            user.password = req.body.password;
        }
        try {
            const updatedUser = await user.save();
            res.status(200).json({
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.Email, 
            });
        } catch (error) {
            res.status(500);
            throw new Error('Error updating user profile');
        }
    }else{
        res.status(404)
        throw new Error('User not Found');
    }

   
});
