// 1. Import Express
const express = require('express');

// 2. Create an Express application
const app = express();

// 3. Define the port 
const port = 3000;

// 4. Create our first "route"
// This handles GET requests to the homepage ("/")
app.get('/',(req, res) => { res.send('Hello,World! This is my first Express server.');});

// 5. Start the server and listen for connections 
app.listen(port, () => { console.log(`Server is running at http://localhost:${port}`);});