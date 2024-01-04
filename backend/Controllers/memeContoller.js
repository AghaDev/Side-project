import Meme from "../Models/memeModel.js";
import User from "../Models/userModel.js";

class memeController{

    static async getAllMemes(req, res){
        try{
            const memes = await Meme.findAll({
                include: [{
                    model:User,
                }
                ]
        });
            return res.status(200).json(memes);
        }
        catch(err){
            return res.status(500).json(err.message);
        }
    } 

    static async getMemeById(req, res){
        try{
        const meme = await Meme.findByPk(req.params.id,{include: [{
            model:User,
        }
        ]});
        return res.status(200).json(meme);
    }
    catch(err){
        return res.status(500).json(err.message);
    }
}

    static async createMeme(req, res){
        try{
            const user = await User.findByPk(req.params.id);
            const image = req.file.path;
            const meme = await Meme.create({...req.body, image});
            
            meme.UserId = user.id;
            await meme.save();
            return res.status(201).json(meme);
        }
        catch(err){
            return res.status(500).json(err.message);
        }
}

    static async deleteMeme(req, res){
        try{
            const meme = await Meme.findByPk(req.params.id);
            return res.status(200).json(meme);
            await meme.destroy();
        }
        catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async updateMeme(req, res){
        const {userId} = req.body;
        const imageTester = req.body;
        // console.log(req.body)
        try{
            if(!userId){
                return res.status(500).json("No user Id entered");
            }
            if(req.file && req.file.path){
                imageTester.image = req.file.path;
            }
            const meme = await Meme.findByPk(req.params.id);
            if(userId != meme.UserId){
             return res.status(500).json("unauthorized user");
            
            }   
            await meme.update(imageTester);
            return res.status(200).json(meme);
            }
        
        catch(err){
            return res.status(500).json(err.message);
        }
    }
}

export default memeController