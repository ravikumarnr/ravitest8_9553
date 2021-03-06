
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const emailSchema = new Schema({
   name: String,
   email: String
})

const emailModel = mongoose.model('email', emailSchema, 'email');
export default emailModel;
