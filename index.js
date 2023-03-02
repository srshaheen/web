require('dotenv').config();
const express = require('express');
const app = express();

const Employee = require('./models/models');

const connectDB = require('./database/connection');

app.set("view engine", "ejs");


//database connection
const dburl = process.env.MONGO_URl;
connectDB(dburl);



app.use(express.urlencoded({extended: true}));
app.use(express.json());

//show data

const showData = async (req, res) => {
    const employees = await Employee.find();
    res.render('index', {employees});
}

app.get("/", showData)




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})