function helloWorld() {
    

    var b = document.getElementById("hello").innerHTML === "This is a test!!!";
    if (b) {
        document.getElementById("hello").innerHTML = "Hello World!";

    }
    else {
        document.getElementById("hello").innerHTML = "This is a test!!!";
    }
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function saveInputPrintOutput() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("pword").value;

    document.getElementById("output").innerHTML = "Name: " + name + " Password: " + password;
}

function colorInvert() {
    document.getElementById("HW").style.filter = "invert(1)";
}

function colorNormal() {
    document.getElementById("HW").style.filter = "invert(0)";
}

function forLoop() {
    var sum = 0;
    for (i = 0; i < 5; i++) {
        sum += i;
    }
    document.getElementById("sum").innerHTML = sum;
}

function date() {
    var date = new Date();
    document.getElementById("today").innerHTML = date;
}
