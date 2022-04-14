const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const expressStaticGzip = require('express-static-gzip');
const rateLimit = require('express-rate-limit');
const paths = require('./paths');

const limiter = rateLimit({
  windowMs: 1 * 60 * 100, // 1 minute
  max: 200,
});

const app = express();

app.use(
  '/',
  expressStaticGzip(path.join(__dirname), {
    enableBrotli: true,
  })
);

app.use(limiter);

app.get('/', (req, res) => {
  res.sendFile(paths.INDEX_PAGE);
});

// 404 route (keep this as the last route)
app.get('*', (req, res) => {
  res.sendFile(paths.ERROR_PAGE);
});

// path must route to lambda
app.use('/.netlify/functions/server', app);

// export handler function which is our app wrapped in the serverless package
module.exports.handler = serverless(app);
