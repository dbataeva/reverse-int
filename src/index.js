module.exports = function reverse(n) {
    let numAsStr;
    let reverseStr = '';

    if (n < 0) {
        numAsStr = (-n).toString();
    } else {
        numAsStr = n.toString();
    }

    for (let i = numAsStr.length - 1; i >= 0; --i) {
        reverseStr += numAsStr[i];
    }

    return (+reverseStr);
}
