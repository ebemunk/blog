+++
date = "2016-01-21T04:56:00-07:00"
PublishDate = "2016-01-21T04:56:00-07:00"
draft = false
title = "Optimizing Particle Background Performance with Quadtrees"
tags = ["performance", "optimization", "javascript"]
+++

I have been recently looking at some Javascript libraries to make particle-based backgrounds. I found 2 promising libraries, [Particleground](https://github.com/jnicol/particleground) and [particles.js](https://github.com/VincentGarreau/particles.js). Before jumping in and copy/pasting sample code, I figured I'd do some thinking of my own and see if I really need a library to achieve a simple particle background where the particles are connected by lines, depending on their distance.

So - okay, simple enough, 100% width/height canvas at the background, put out some randomly placed dots, then link the dots depending on the distance. Hmm.

How do you actually find the points closest to a given point? A naive approach is to loop over all points, and then for every point check all the other points and calculate their distance. Uh-oh, that sounds like a *O(n<sup>2</sup>)* algorithm.

Okay, so maybe doing it myself from scratch isn't such a good idea. Surely, the libraries would have cleverer solutions than that, right? (Hint: *nope*)

## Digging in

Lets dig in their code and see what they're actually doing to find points that are closer than some distance.

In both cases, the main draw function does something to the effect of:

``` js
for( var i=0; i < points.length; i++ ) {
  var point = points[i];

  for( var j=i+1; j < points.length; j++ ) {
    var point2 = points[j];

    //get the distance between points
    var dx = point.x - point2.x;
    var dy = point.y - point2.y;

    var dist = Math.sqrt(dx*dx + dy*dy);

    if( dist < someDistance ) {
      //link points - draw stuff
    }
  }
}
```
every single frame.

Maybe it's not exactly *O(n<sup>2</sup>)*, but it seems like a whole lot of extra work. So basically, most of the processing is spent calculating euclidian distances only to throw it away.

Surely, there must be a better way to do this! (Hint: *there is!*)

## Quadtrees

Turns out, we can drastically reduce the number of checks we have to make, by using [Quadtrees](https://en.wikipedia.org/wiki/Quadtree). I wont go into how they work, there are a lot of resources out there. What I want to do is to see if we can improve the performance and squeeze more FPS out of them.

Hang on, though, let's backtrack. Who's saying they are slow anyway? Just because the code *seems* slow doesn't mean it is. Checking out the demo pages, they seem to work just fine! But, I have a nagging feeling that they will get exponentially slower the more points we add...

Check out these examples and play with the density (Particleground - lower density = more points) and number of points (particles.js - more points = uh.. more points).

### Particleground
<iframe width="100%" height="300" src="//jsfiddle.net/ebemunk/jjvhdw7r/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### particles.js
<iframe width="100%" height="300" src="//jsfiddle.net/ebemunk/q0try1kw/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Okay, so they obviously work well with default settings. Increasing the number of points very quickly grinds the performance to a halt, with about 500 points on screen, you're lucky to get 3-4 fps.

Now here are the same examples, but this time I've modified both sources to use a quadtree search instead of looping through a gazillion points every frame.

For the quadtree implementation, I went with [d3-quadtree](https://github.com/d3/d3-quadtree) from the brilliant d3 library. The guts of it is:

``` js
//on every frame, we reset the quadtree and reconstruct it, as such
var QUADTREE = d3.geom.quadtree()
//luckily both libraries use .x .y properties
.x(function (d) { return d.x; })
.y(function (d) { return d.y; })
(points) //pass in the points

//searching the quadtree
function closePoints (p) {
  //we'll collect all the potentially close points
  var arr = [];

  //distance calculations
  //DISTANCE is whatever distance the library uses
  //CANVAS refers to the canvas element of the library
  var x0, y0, x3, y3;
  x0 = Math.max(0, p.x - DISTANCE);
  y0 = Math.max(0, p.y - DISTANCE);
  x3 = Math.min(CANVAS.w, p.x + DISTANCE);
  y3 = Math.min(CANVAS.h, p.y + DISTANCE);

  //start visiting nodes of the quadtree
  QUADTREE.visit(function (node, x1, y1, x2, y2) {
    var tooFar = x1 >= x3 || y1 >= y3 || x2 < x0 || y2 < y0;

    //make sure its not too far, and we dont return the point
    //that we're searching against
    if( node.data && ! tooFar && node.data.index != p.index ) {
         arr.push(node.data);
    }

    return tooFar;
  });
  return arr;
}
```

This will retrieve potentially close points, which we then iterate over and calculate the distance and connect/discard accordingly.

Those of you with a keen eye will notice there is a further optimization we can do, in that once we connect PointX and PointY, we don't need to connect PointY to PointX. The naive approach of looping through all points avoids this, but with a quadtree we don't iterate over points sequentially, so it needs to be handled. I won't produce the code here, but it just involves keeping track of connected points discarding them if we've already connected those two. Check out the examples below to see the difference.

### Particleground - Quadtree
<iframe width="100%" height="300" src="//jsfiddle.net/ebemunk/n178donc/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### particle.js - Quadtree
<iframe width="100%" height="300" src="//jsfiddle.net/ebemunk/bsfL61q0/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Wow! Do you see that?

In fact, here are some numbers: with 623 particles on the screen, the naive version has to do **193,753** comparisons per frame (623*622/2). Quadtree version does something around **44,000** comparisons per frame. That's almost 4.5 times the difference!

## Something's fishy here

Okay, so we do 4.5 times less work, but comparing the fiddle examples, the FPS increase is nowhere near 4.5 times! What gives?

Well, turns out we hit the browser's limitations for canvas drawing a lot sooner than we hit the point where this optimization pays off. Replacing the canvas drawing with something that takes time, like an empty loop that does 10,000 iterations, the difference in FPS becomes much more noticeable.

Of course, if you were doing something other than just drawing lines between points (for example, a force-directed graph, or an interactive one where the mouse somehow affects nearby points, or simulating gravity, etc.) you would almost certainly have to do such an optimization, and quadtrees are an awesome device for this (albeit not the only one).

## Take-aways

I learned two things from this experiment. Firstly, don't go cowboy mode and do the most naive implementation, especially when it involves exponential growth. It usually pays off greatly when you consider alternatives, which might be a tad more complicated, but have substantial performance gains.

Secondly, make sure to optimize pieces of code that are actually bottlenecks. As seen above, the visible gains in FPS do not reflect the actual gains in performance, because the bottleneck in question soon becomes drawing on canvas, instead of the loop through the points.
