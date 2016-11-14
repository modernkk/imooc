export var foo = "bar";
setTimeout(() => foo = "baz", 500);

// 上面代码输出变量foo，值为bar，500毫秒之后变成baz