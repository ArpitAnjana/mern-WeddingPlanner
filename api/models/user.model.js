import mongoose from "mongoose";


//we have created the schema here :
//which have unique properties also so that noone else can have same name or email
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
    }
}, { timestamps: true });


//created model below 
const User = mongoose.model('User', userSchema);

export default User;