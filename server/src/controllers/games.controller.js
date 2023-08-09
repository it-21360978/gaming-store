const games = require ('../models/games');
const path = require('path');
const fs = require('fs');


//get all games
exports.getGames = async (req, res) => {
  try {
     // Find all games
    const gameArray = await games.find();
    //checking the games exists
    if (!gameArray) {
      return res.status(400).json({ msg: 'There are no games' });
    }
    //map the games data with filepath
    const gamesImage = gameArray.map(game => {
      //Construct the image URL for  server's base URL
      const imageUrl = `http://localhost:3030/uploads/${encodeURIComponent(game.file)}`;
      //return the document to object with filepath
      return {
        ...game.toJSON(),
        imageUrl,
      };
    });

    /// Send the array of games
    res.json(gamesImage);
  } catch (error) {
    //give the error response
    console.log(error);
    res.status(500).send({ msg: 'Error occurred while fetching the games' });
  }
};



//get a specific game

exports.getGame = async (req, res) => {
  try {
    //get the game id by parameter
    const gameId = req.params.id;
    //find the game by id
    const game = await games.findById(gameId);

    //checking the exist game
    if (!game) {
      return res.status(404).json({ msg: 'Game not found' });
    }
    // Convert the  document to object
    const gameDetails = game.toJSON();
    // Build the file path
    const imageUrl = `http://localhost:3030/uploads/${encodeURIComponent(game.file)}`;
    // Send the JSON response
    res.json({
      gameDetails: gameDetails,
      imageUrl,
    });
    //res.send(gameDetails); // Only send the file path as the response
  } catch (error) {
    //give the error response
    console.log(error);
    res.status(500).send({ msg: 'Error occurred while fetching the game' });
  }
};



//add a game
exports.addGame = async(req,res)=>{
    try {
       //give the name,data from body
        const {name,date} = req.body;
        //create a new game object
        const newGame = new games({
            name:name,
            date:date,
            file:req.file.filename,
            mimetype:req.file.mimetype
        });
        //save the game object
        const saveGame = await newGame.save();
        // Send the saved game object in the response
        res.json(saveGame);
        return({msg:'Game added successfully'});

    } catch (error) {
      //give the error response
        console.error(error);
        res.status(500).json({ msg: 'Error occurred' });
    }
};



//update a game
exports.updateGame = async (req, res) => {
    try {
        // Get the game ID from parameters
        const { id } = req.params;
        // get name ,date from body
        const { name, date } = req.body;
        //create a object to updte
        const updateGame = {
            name: name,
            date: date,
        };

        // Check new file is upload
        if (req.file) {
            updateGame.file = req.file.filename;
            updateGame.mimetype = req.file.mimetype;
        }
        // Find the game by ID and update as a new
        const update = await games.findByIdAndUpdate(id, updateGame, { new: true });

        // response updated game 
        res.json(update);

        return ({ msg: 'Game updated successfully' });
    } catch (error) {
      //give the error response
        console.error(error);
        res.status(500).json({ msg: 'Error occurred while updating the game' });
    }
};



//delete a game
exports.deleteGame = async (req, res) => {
  try {
    // Get the game ID from parameters
    const { id } = req.params;
    // Find the game by ID and delete
    const deletedGame = await games.findByIdAndDelete(id);
    // Check the game exists
    if (!deletedGame) {
      return res.status(404).json({ msg: 'Note not found' });
    }
    // Build the file path
    const filePath = path.resolve('uploads',deletedGame.file);
    console.log('filePath:', filePath);
    // Delete the file
    fs.unlink(filePath, (err) => {
      if (err) {

        console.error('unlink error:', err);
        return res.status(500).json({ msg: 'Failed to delete image' });
      }
      //give the console log msg
      console.log(`File ${filePath} deleted successfully`);
    });
    // respose deleted game
    res.json(deletedGame);
  } catch (error) {
    //give the error response
    console.error('error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};
