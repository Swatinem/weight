# weight

weight tells you the memory usage and loading time of your module.
Inspired by https://gist.github.com/isaacs/5733238

So read up on [Unix Philosophy and node.js](http://blog.izs.me/post/48281998870/unix-philosophy-and-node-js)
and make sure to write small modules that do just one thing but do that well.

Remember people, this is not Java. Your modules are not supposed to take
1 minute to start and use > 2G right after startup.

## Installation

    $ npm install weight

## Usage

    $ cd yourmodule
    $ weight # current directory
    load time: 25.723ms
    js heap usage: 640.8kb
    $ weight node_modules/mocha # relative directory
    load time: 28.119ms
    js heap usage: 806.2kb
    $ weight /usr/lib/node_modules/weight/node_modules/bytes # absolute directory
    load time: 0.636ms
    js heap usage: 6.59kb

### Caveat

* loading time incurrs IO, so make sure your caches are warm!
* heap usage uses `process.memoryUsage().heapUsed` internally, so it depends
  a lot on GC behavior. I actually had situations where it reported negative
  numbers, haha. So use this with caution!

