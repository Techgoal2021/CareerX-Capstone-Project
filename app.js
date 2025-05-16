// const express = require('express');
// const mongoose = require("mongoose");
// const path = require('path');
// require('dotenv').config({ path: path.join(__dirname, '.env') });

// const app = express(); // ✅ Move this to the top before any app.use()

// app.use(express.json());

// if (!process.env.MONGODB_URL || !process.env.PORT) {
//   console.error("Error: Environment variables not set");
//   process.exit(1);
// }

// const MONGODB_URL = process.env.MONGODB_URL;
// const port = process.env.PORT;

// try {
//   const userRouter = require(path.join(__dirname, 'routes', 'users'));
//   const gameRouter = require(path.join(__dirname, 'routes', 'games'));

//   app.use('/users', userRouter);
//   app.use('/games', gameRouter);
//   app.use('/api/games', gameRouter); // this line is redundant if /games already exists
// } catch (err) {
//   console.error("Error loading routers:", err);
// }

// mongoose.connect(MONGODB_URL)
//   .then(() => {
//     console.log("Mongodb connected....");
//     app.listen(port, () => {
//       console.log(`Server listening on port ${port}`);
//     });
//   })
//   .catch(err => {
//     console.error("Error connecting to MongoDB:", err.message);
//     process.exit(1);
//   });


const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(express.json());

if (!process.env.MONGODB_URL || !process.env.PORT) {
  console.error('Error: Environment variables not set');
  process.exit(1);
}

const MONGODB_URL = process.env.MONGODB_URL;
const port = process.env.PORT;

const userRouter = require(path.join(__dirname, 'routes', 'users'));
const gameRouter = require(path.join(__dirname, 'routes', 'games'));

app.use('/users', userRouter);
app.use('/api/games', gameRouter);

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log('Mongodb connected....');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });
