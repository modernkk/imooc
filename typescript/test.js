"use strict";
var Foo = (function () {
    function Foo(bar) {
        this.bar = bar;
    }
    return Foo;
}());
exports.Foo = Foo;
var Bar = (function () {
    function Bar(bar) {
        this.bar = bar;
    }
    return Bar;
}());
exports.Bar = Bar;
