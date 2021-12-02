import productModelDATA from './models/productModel'
import { Request, Response } from 'express'
var cloudinary = require('cloudinary')

var imagem = ''
var resultado = ''

async function register(req, res) {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    cloudinary.uploader.upload(req.file.path, function (result, error) {
      // console.log(result, error)
      imagem = result.secure_url
      resultado = result
      console.log(resultado)
    })

    const user = await productModelDATA.create({
      title: req.body.title,
      price: req.body.price,
      image: imagem,
    })

    return res.status(201).json({ user })
  } catch (error) {
    return res.status(400).json({ msg: 'Error!', error })
  }
}

async function getAll(req, res) {
  try {
    const data = await productModelDATA.find()

    return res.status(201).json(data)
  } catch (error) {
    return res.status(400).json({ msg: 'error', error })
  }
}

async function getById(req, res) {
  try {
    const data = await productModelDATA.findById(req.params.id)

    return res.status(201).json(data)
  } catch (error) {
    return res.status(400).json({ msg: 'error', error })
  }
}

async function update(req, res) {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    cloudinary.uploader.upload(req.file.path, function (result, error) {
      // console.log(result, error)
      imagem = result.secure_url
      resultado = result
      console.log(resultado)
    })

    await productModelDATA.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        image: imagem,
      },
    })

    return res.status(201).json({ msg: 'User updated susscessfully!!' })
  } catch (error) {
    return res.status(400).json({ msg: 'error', error })
  }
}

export default { register, getAll, getById, update }
