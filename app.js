const express = require('express');
 
// We create our own server named app
// Express server will be handling requests and responses
const app = express();
// Make everything inside of public/ available
app.use(express.static('public'));


app.listen(3000, () => console.log('My first app listening on port 3000! '));
// ...
// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
 
// cat route:
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));
// ...