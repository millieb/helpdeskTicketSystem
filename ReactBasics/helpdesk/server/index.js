const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false})); 

const db = require('./models');

// Routers
const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);

db.sequelize.sync().then(()=> {
    app.listen(3001, () => {
        console.log('Server is running.');
    });
});
