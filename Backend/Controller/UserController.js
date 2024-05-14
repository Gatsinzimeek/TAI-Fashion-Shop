import asyncHandler from 'express-async-handler';

export const AuthUser = asyncHandler(async (req, res) => {
    res.status(401);
    throw new Error('something went');

    res.status(200).json({
        message: 'Auth user'
    })
});

