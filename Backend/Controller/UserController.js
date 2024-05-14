import asyncHandler from 'express-async-handler';


// route POST /api/user/auth
export const AuthUser = asyncHandler(async (req, res) => {

    res.status(200).json({
        message: 'Auth user'
    })
});

// route POST /api/user

export const RegisterUser = asyncHandler(async (req, res) => {
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
