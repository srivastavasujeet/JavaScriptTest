var MyReadOnly = function() {
    var trulyPrivateVariable;

    trulyPrivateVariable = 5; // For instance
    this.accessorFunction = function() {
        return trulyPrivateVariable;
    }
};

var n = new MyReadOnly();
console.log(n.trulyPrivateVariable);
console.log(n.accessorFunction());
