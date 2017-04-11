var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'MyApp',
    envFrontend: process.env.BOXFUSE_ENV,
  });
});

/* GET appinfo */
router.get('/info', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    appInfo: {
      buildNumber: '__REPLACE_BUILD_NUMBER__',
      gitCommit: '__REPLACE_BUILD_COMMIT__',
      buildDate: '__REPLACE_BUILD_DATE__',
      env: process.env.BOXFUSE_ENV,
      version: '__REPLACE_BUILD_APP_VERSION__'
    },
  }));
});

module.exports = router;
