// Dependencies
const express = require("express");

// Setting the port of our application using Heroku.
const PORT = process.env.PORT || 3001;

// Create an instance of the express app.
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send('Hello World')
// })
app.use(express.static('public'));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/', (req, res) => {
  res.render(__dirname, + '../public/index.html');
  // const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  // res.sendFile(rootHtmlPath);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


// require('./routes')(app);