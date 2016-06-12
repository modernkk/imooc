/*global require,getLowLevelSourceObject*/
'use strict';

var Readable = require('stream').Readable;
var util = require('util');

util.inherits(SourceWrapper, Readable);

function SourceWrapper(opt) {
  Readable.call(this, opt);

  this._source = getLowLevelSourceObject();

  // every time there's data, we push it into the internal buffer
  this._source.ondata = (chunk) => {
    // if push() returns false, then we need to stop reading from source
    if (!this.push(chunk)) {
      this._source.readStop();
    }
  };

  // when the source ends, we push the EOF-signaling `null` chunk
  this._source.onend = (chunk) => {
    this.push(null);
  };

  // _read will be called when the stream wants to pull more data in
  // the advisory size argument is ignored in this case
  SourceWrapper.prototype._call = function(size) {
    this._source.readStart();
  };
}
