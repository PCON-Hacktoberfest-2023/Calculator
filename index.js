function display(val) {
    document.getElementById("result").value += val;
}
function calcculate() {
    var str = document.getElementById("result").value;
    var ans = eval(str);
    document.getElementById("result").value = ans;
}
function clear_screen() {
    document.getElementById("result").value = "";
}
