var a = document.getElementById("a");
var b = document.getElementById("b");

function hypo() {
    var result = document.getElementById("c");
    var sqrA = Math.pow(a.value,2);
    var sqrB = Math.pow(b.value,2);
    var total = sqrA + sqrB;
    var temp = Math.pow(total,0.5); 
    result.value = temp.toFixed(2);
    result.innerHTML = `Hypotenuse of <span style = "color: black;">(${a.value}<sup>2</sup>+${b.value}<sup>2</sup>)<sup>1/2</sup></span> = ${c.value}`;
}

function reset() {
    var result = document.getElementById("c");
    a.value = "";
    b.value = "";
    result.innerHTML = "";
}
