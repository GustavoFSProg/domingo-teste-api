import { Decimal128 } from 'bson'
import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
})

export default model('productModelDATA', schema)
