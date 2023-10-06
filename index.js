function appendToResult(val) {
    document.getElementById("result").value += val;
}

function calculateResult() {
    try {
        var str = document.getElementById("result").value;
        var ans = eval(str);
        document.getElementById("result").value = ans;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function backspace() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function calculatePercentage() {
    var str = document.getElementById("result").value;
    var ans = eval(str) / 100;
    document.getElementById("result").value = ans;
}

function calculateSquareRoot() {
    var str = document.getElementById("result").value;
    var ans = Math.sqrt(eval(str));
    document.getElementById("result").value = ans;
}

// Keyboard support
document.addEventListener("keydown", function (event) {
    if (event.key.match(/[0-9+\-*/.=]|Enter/)) {
        event.preventDefault();
        if (event.key === "Enter") {
            calculateResult();
        } else {
            appendToResult(event.key);
        }
    } else if (event.key === "Escape") {
        clearScreen();
    }
});
