var x = function (foo, ...bar) {
  console.log(bar);
};

var y = function (foo, ...bar) {
  var x = function z(bar) {
    bar[1] = 5;
  };
};

var b = function (x, y, ...args) {
  console.log(args[0]);
  args.pop();
  console.log(args[1]);
};

var z = function (foo, ...bar) {
  var x = function () {
    bar[1] = 5;
  };
};

var a = function (foo, ...bar) {
  return bar.join(",");
};

var b = function (foo, ...bar) {
  var join = "join";
  return bar[join];
};

var b = function (...bar) {
  return bar.len;
};

var b = function (foo, ...bar) {
  return bar.length * 2;
};

var b = function (foo, baz, ...bar) {
  return bar.length;
};

function x (...rest) {
  rest[0] = 0;
}

function swap (...rest) {
  [rest[0], rest[1]] = [rest[1], rest[0]];
}

function forIn (...rest) {
  for (rest[0] in this) {
    foo(rest[0]);
  }
}
