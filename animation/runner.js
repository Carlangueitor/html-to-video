var page = require('webpage').create();
page.viewportSize = { width: 640, height: 480 };

page.open('file:///home/charly/projects/html-to-video/animation/index.html', function () {
  setTimeout(function() {
    // Initial frame
    var frame = 0;
    // Add an interval every 25th second
    setInterval(function() {
      // Render an image with the frame name
      page.render('frames/anim'+(frame++)+'.png', { format: "png" });
      // Exit after 50 images
      if(frame > 50) {
        phantom.exit();
      }
    }, 25);
  }, 666);
});
