var page = require('webpage').create();

page.clipRect = { top: 0, left: 0, width: 900, height: 800};
page.viewportSize = { width: 900, height: 800};

var url = 'http:localhost:5000';
var frames = 100;

page.open(url, function(){
    setInterval(function(){
        page.render('/dev/stdout');

        if( frames == 0 ){
            phantom.exit();
        }

        frames--;

    }, 30);
});