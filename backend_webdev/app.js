// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/users', userRoutes); 

app.get('/', (req, res) => res.send('API is running'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
