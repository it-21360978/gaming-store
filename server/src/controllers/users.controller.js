const users = require('../models/user');


//get all users
exports.getUsers = async (req,res)=>{
    try{
        //find the users
        const userArray = await users.find();
        //checking the users exists
        if(!userArray){
            return res.status(400).json({msg:'There are no users'});
        }
        //send the array of users
        res.json(userArray);
    }catch(error){
        //response the error
        console.log(error);
        res.status(500).send({msg:'Error occurred while fetching the users'});
    }
};


//get specific user
exports.getUser = async (req,res)=>{
    try{
        //get the user id by parameter
        const userId = req.params.id;
        //find the user by id
        const user = await users.findById(userId);
        //checking the exist user
        if(!user){
            return res.status(404).json({msg:'User not found'});
        }
        //send the user
        res.json(user);
    }catch(error){
        //give the error response
        console.log(error);
        res.status(500).send({msg:'Error occurred while fetching the user'});
    }
};


//post user
exports.addUser = async (req, res) => {
    try {
    // Get the name, email,password from  body
      const { name, email, password } = req.body;
        // Check if the required fields are provided
      if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Name, email, and password are required' });
      }

      /* validation of email exists */
      //find the email
      const checkEmail = await users.findOne({ email });
      if (checkEmail) {
        return res.status(400).json({ msg: 'Email already exists' });
      }
      
      // Create a new user
      const user = await users.create({ name, email, password });
      //response the new user
      res.json(user);
    } catch (error) {
        //give the error response
      console.log(error);
      res.status(500).json({ msg: 'Error occurred while adding the user' });
    }
  };
  
  
//put the user
exports.updateUser = async (req, res) => {
    try {
        // Get the id as parameter
      const { id } = req.params;
        // Get the name, email, password from body
      const { name, email, password } = req.body;
      // Check if the required fields are provided
      const user = await users.findByIdAndUpdate(id, { name, email, password }, { new: true });
        // Check if the user exists
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      /* Validations */
      // Check if the email is being changed and if it already exists
      if (user.email !== email) {
        const checkEmail = await users.findOne({ email });
        if (checkEmail) {
          return res.status(400).json({ msg: 'Email already exists' });
        }
      }
  
      // Response with the updated user data
      res.json(user);
    } catch (error) {
      // Give the error response
      console.log(error);
      res.status(500).send({ msg: 'Error occurred while updating the user' });
    }
  };
  

  //delete the user
exports.deleteUser = async (req,res)=>{
    try{
        //get the user id by parameter
        const {id}=req.params;
        //find the user by id and delete
        const result = await users.findByIdAndDelete(id);
        //response the deleted user
        res.json(result);
    }catch(error){
        //give the error response
        console.log(error);
        res.status(500).send({msg:'Error occurred while deleting the user'});
    }
};


//login the user
exports.login = async (req, res) => {
  try {
    // Get the email and password from body
    const { email, password } = req.body;
    // Check if the required fields are provided
    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }
    // Find the user by their email
    const user = await users.findOne({ email });
    // Check if the user exists in the database
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check input password and stored password are equal?
    if (user.password !== password) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    //response user
    res.json({ user });
  } catch (error) {
    // Give the error response
    console.log(error);
    res.status(500).send({ msg: 'Error occurred during login' });
  }
};