const express = require('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require ('mongoose');
const gameRouter = require ('./src/routes/game.routes');
const userRouter = require ('./src/routes/user.routes');




const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



//routes
app.use('/game',gameRouter);
app.use('/user',userRouter);
app.use('/uploads', express.static('uploads'));



//connect to mongoDB

const Db = "mongodb+srv://gihan:yasintha@gamestore.9oxslgk.mongodb.net/?retryWrites=true&w=majority";

mongoose.set ('strictQuery',false);
mongoose.connect(Db,{
    useNewUrlParser:true,
    useUnifiedTopology:true}).then(()=>{

    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("Connection Error",error);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
