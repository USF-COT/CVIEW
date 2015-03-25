/*global require process module*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bundle_url;
    var react_url;
    if (process.env.NODE_ENV === 'production'){
        bundle_url = '/javascripts/bundle.min.js';
        react_url = '//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.min.js';
    }
    else {
        bundle_url = '/javascripts/bundle.js';
        react_url = '//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js';
    }

    res.render('index', {
        title: 'CBASS Viewer',
        bundle_url: bundle_url,
        react_url: react_url
    });
});

module.exports = router;
