import productController from './productController'
import { Router } from 'express'

import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const route = Router()

route.get('/', productController.getAll)
route.post('/create', upload.single('image'), productController.register)

export default route
