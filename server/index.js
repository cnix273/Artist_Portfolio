const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send('Hello World')
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


// require('./routes')(app);

// app.get('*', (req, res) => {
//   res.sendFile(__dirname, '..', 'public', 'index.html');
// //   const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
// //   res.sendFile(rootHtmlPath);
// })