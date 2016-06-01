# hapi-goose
### An adapter for Mongoose as a hapi.js plugin

[![npm](https://img.shields.io/npm/v/hapi-goose.svg?maxAge=2592000)]()

### Installation

`npm install --save hapi-goose`

### Usage

In your hapi.js app, register the plugin in your pack similar to the example:

```node
var server = new Hapi.Server(process.env.PORT);

// Register the hapi-goose plugin
server.pack.register({
  plugin: require('hapi-goose'),
  options: {
    mongodb_uri: 'mongodb://localhost/myapp_dev'
  }
}, function(err) {
  if (err) { throw err }
});

// Add routes, other plugins, etc...
// Use mongoose as you would normally.
var mongoose = require('mongoose');
var User = mongoose.model(...);

// Later in your app, if you find yourself needing to manage connection to the db...

// You can also connect/disconnect with the database
// These are just wrappers on the regular Mongoose methods with some logging added
server.plugins['hapi-goose'].connect(someCallback);
server.plugins['hapi-goose'].disconnect();

// Start server
server.start();
```

### License Information

Copyright (c) 2014-2016, Tyler Hughes <iampbt@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
