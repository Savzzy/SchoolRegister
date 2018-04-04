var add = function (a, b) {
    var c = a + b;
    return c;
}

var mul = function (a, b) {
    var mul = a * b;
    return mul;
}

var sub = function (a, b) {
    var sub = a - b;
    return sub;
}

module.exports = function() {
    var returnObject = {
        "mul": mul,
        "sub": sub
    }
}
