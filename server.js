const express = require('express');
const app = express();
// const port = process.env.PORT || 8080;
// const frontAppName = 'argon-dashboard-angular'; // taken from package.json name property

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);