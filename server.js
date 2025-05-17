// imported modules
const fs = require('fs');
const express = require('express');
const app = express();

// staticConfig variable
const staticConfig = JSON.parse(fs.readFileSync('static_config.json'));

// app started & listening server
app.listen(2013, () => console.log('Listening on port 2013!'));

// GET endpoint
app.get('/static/new_feature.html', (req, res) => {
  if (!staticConfig.newFeatureLaunched) {
    res.status(401).send('Unauthorized.\n');
    return;
  }
  res.send('<html>Hello World!</html>\n')
})