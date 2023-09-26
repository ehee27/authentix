import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import generateToken from '../utils/generateToken.js'

// auth user and set token
// route POST/api/users/auth
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' })
})

// register new User
// route POST/api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  //---------------
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  //---------------
  const user = await User.create({ name, email, password })
  if (user) {
    generateToken(res, user._id)
    res.status(201).json({ _id: user._id, name: user.name, email: user.email })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
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
