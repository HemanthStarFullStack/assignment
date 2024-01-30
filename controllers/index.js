const User = require('../models/users');


module.exports.adminPage = async(req,res) =>{

    try {

        const users = await User.find();

        return res.render('admin',{users:users});
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}