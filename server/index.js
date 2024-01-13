const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
connect('mongodb+srv://koustubhlap:kond018@koustubh18.qmw1c9a.mongodb.net/', {dbName: "coursesdata"});

app.listen(3000, () => console.log('Server running on port 3000'));