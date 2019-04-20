
//The code is inspired from Kasim Terzic (CS5003)

var express = require('express');
var bodyParser = require('body-parser');

(function() {

    // Hold our in-memory data in here
    var thePort;

    // Export the public methods of the module so we can run it from JS
    module.exports = {
        runApp: runApp,
        configureApp: configureApp, 
    };


    /**
     * Run the app on the default port 8080. Makes use of configureApp to set up the
     * processing pipeline.
     */
    function runApp() {
        thePort = 8080;

        var app = express();
        configureApp(app);
        console.log("Listening on port " + thePort);
        return app.listen(thePort);
    }

    /**
     * Configure the app processing pipeline. Call directly instead of runApp() for
     * testing etc.
     */
    function configureApp(app) {
        
        // This will parse anything submitted to us by assuming it is JSON.
        // The parsed object will be added as "body" to the request object and passed
        // on. This is useful if we exchange a lot of JSON documents, as we tend to do
        app.use(bodyParser.json());

        // For everything else, serve a tatic page from the
        // "static" directory. This would, e.g. be your HTML and
        // CSS files and any client-side js files requested
        // by the browser
        app.use('/', express.static('static'));
    }




})();
