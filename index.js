function display(val) {
    document.getElementById("result").value += val;
}
function calculate() {
    var str = document.getElementById("result").value;
    var ans = eval(str);
    document.getElementById("result").value = ans;
}
function clear_screen() {
    document.getElementById("result").value = "";
}