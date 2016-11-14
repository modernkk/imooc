// err
export 1;

var num = 1;
export num;

// correct
export var num = 1;

var num = 1;
export {num};

var m = 1;
export { m as num};

// err
function f() {}
export f;

// correct
export function f() {};

function f() {}
export {f};
