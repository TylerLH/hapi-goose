# hapi-mongoose
### An adapter for Mongoose as a hapi.js plugin

### Installation

`npm install --save hapi-mongoose`

### Usage

In your hapi.js app, register the plugin in your pack similar to the example:

```node
var server = new Hapi.Server(process.env.PORT);

// Register the hapi-mongoose plugin
server.pack.register({
  plugin: require('hapi-mongoose'),
  options: {
    mongodb_uri: 'mongodb://localhost/myapp_dev'
  }
}, function(err) {
  if (err) { throw err }
});

// Add routes, other plugins, etc...

// In other modules, you can access the Mongoose instance
var mongoose = server.plugins['hapi-mongoose'].instance;

// You can also connect/disconnect with the database
mongoose.connect(someCallback);
mongoose.disconnect();

// Start server
server.start();
```

### License Information

Copyright (c) 2014, Tyler Hughes <iampbt@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.