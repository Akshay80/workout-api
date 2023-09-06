const express = require("express");
const router = require("./routes/workouts");
require("dotenv").config();
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    console.log('Database connected!')
})
.catch((error) => {
    console.log("Error: ", error)
})

app.use(express.json());
app.use("/api/workout", router);


app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
