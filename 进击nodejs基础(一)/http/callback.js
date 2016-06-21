/*global console*/
'use strict';

function learn(something) {
  console.log(something);
}

function we(callback, something) {
  something += ' is cool';
  callback(something);
}

we(learn, 'Nodejs');

// 匿名回调
we(function(something) {
  console.log(something);
}, "Jade");
