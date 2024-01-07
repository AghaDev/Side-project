import User from '../Models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Meme from '../Models/memeModel.js'

class userController{
    static async getAllUsers(req,res){
    try{
        const users = await User.findAll({include:[{model:Meme}]});
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err);
    }
    }

    static async getUser(req,res){
        try{
        const user = await User.findByPk(req.params.id, {include:[{model:Meme}]});
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
}

static async createUser(req,res){

    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
}

static async loginUser(req,res){

    const { username, password } = req.body;
    try {
        if (!username || !password)
            return res.status(400).json(
                { 
                    message: 'username and password are required fields! ',
                });

        const foundUser = await User.findOne({ where: { username: username } });

        if (!foundUser) {
            return res.status(401).json({ alert: "unauthorized login 1" }); 
        }

        const match = await bcrypt.compare(password, foundUser.password);
        

        if (match) {
            const token = jwt.sign(
              { 
           id: foundUser.id              },
           process.env.ACCESS_TOKEN_SECRET, 
          {expiresIn: '1d'});

          res.status(200).json({
          id: foundUser.id,
          username: foundUser.username,
          accessToken: token,
        })
    }

        else {
            res.status(401).json({ alert: "unauthorized login" });
        }
    
}
    catch (err) {
        res.status(500).json({error: err.message});
    }
}


static async updateUser(req,res){
    try{
        const user = await User.findByPk(req.params.id);
        await user.update(req.body);
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
}

static async deleteUser(req,res){
    try{
        const user = await User.findByPk(req.params.id);
        if(!user){
            res.status(404).json("User not found");
        }
        await user.destroy();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
}
}

export default userController;