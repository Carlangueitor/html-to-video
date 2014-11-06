var page  = require('webpage').create();

page.viewposrtSize = { width: 640, height: 480 };

page.open('file:///home/charly/projects/html-to-video/animation/index.html', function() {
  var i = 0;
  var renderIntervalID = setInterval(function() {
    page.render('/dev/stdout', { format: 'jpeg' });
    i++;
    if(i > 1800) {
      clearInterval(renderIntervalID);
      phantom.exit();
    }
  }, 4);
});
