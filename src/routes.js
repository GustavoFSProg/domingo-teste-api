import productController from './productController'
import { Router } from 'express'

import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const route = Router()

route.get('/', productController.getAll)
route.get('/get-by-id/:id', productController.getById)
route.post('/create', upload.single('image'), productController.register)
route.put('/update/:id', upload.single('image'), productController.update)

export default route
