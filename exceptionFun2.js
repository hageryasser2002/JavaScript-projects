
function add(n) {
    var sum = 0;
    if (n.length <= 0) {
        throw "Ooh, you Must pass at least one parameter";
    }
    else {
        for (var i = 0; i < n.length; i++) {
            if (isNaN(n[i])) {
                throw "Enter valid datatype (number)";
            } else {
                sum += n[i];
            }
        }
        console.log(sum);
    }

}

var values = [10, 50, 20,100];
add(values);