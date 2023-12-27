import users from '../Models/userModel.js'
import bcrypt from 'bcrypt'
const createUser = async(req,res)=>{
    try {
        const {name,email,password,username,confirmPass} = req.body;
        if(!name,!email,!password,!username,!confirmPass) return res.status(400).json({message:"Please fill the fields"})
        const user_get =  await users.findOne({email:email,username:username})
        if(user_get) return res.status(400).json({message:"User Already Exists"})
        if(password!=confirmPass) return res.status(400).json({message:"Password Does Not Match"})
        const hashPass = await bcrypt.hash(password,10)
        const userObj = new users({
            name,
            email,
            password:hashPass,
            username
        })
        await userObj.save()
        res.status(201).json({message:"User Created"})
    } catch (error) {
        console.log(error)
    }
}

const userController = {createUser}

export default userController;