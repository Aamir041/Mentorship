function hypo() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var result = document.getElementById("c");
    var sqrA = Math.pow(a.value,2);
    var sqrB = Math.pow(b.value,2);
    var total = sqrA + sqrB;
    c.value = Math.pow(total,0.5);
    c.innerText = `${c.value}`;
}
