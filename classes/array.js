// Your code here
Array.prototype.isEqual = function (input) {
    if (!(input instanceof Array)) return false;

    for (let i = 0; i < this.length; i++) {
        if(this[i] !== input[i]) return false;
    }

    return true;
}
