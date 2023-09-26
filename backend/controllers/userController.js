import asyncHandler from 'express-async-handler'

// auth user and set token
// route POST/api/users/auth
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
  // res.status(401)
  // throw new Error('Something went wrong')
  res.status(200).json({ message: 'Auth User' })
})

// register new User
// route POST/api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register User' })
})

// logout User
// route POST/api/users/logout
// @access PUBLIC
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' })
})

// get User profile
// route GET/api/users/profile
// @access PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User profile' })
})

// update User profile
// route PUT/api/users/profile
// @access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Profile updated' })
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
