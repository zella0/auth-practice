// setup express for easier navigation via HTTP requests
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// to give our views files access for JS/css
app.use(express.static(path.join(__dirname, "public")));

// setup ejs
app.set('view engine', 'ejs');

require("./config/routes.js")(app);

app.listen(port, function() {
  console.log('server is up on port ' + port)
})
