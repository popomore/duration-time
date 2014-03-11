# duration-time

A wrapper for process.hrtime

---

## Install

```
$ npm install duration-time -g
```

## Usage

```
var duration = require('duration-time');
duration.start('a');
doSomeAsync(function() {
  duration.end('a'); // return time between intervals
})
```

## LISENCE

Copyright (c) 2014 popomore. Licensed under the MIT license.
