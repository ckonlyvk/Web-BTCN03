var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var notify = document.getElementById("notify");
var textnotify = document.getElementById("text_notify");
var checkbox = document.getElementsByName("calculation");
var answer = document.getElementById("answer");

function CheckNum() {
    if (isNaN(num1.value) || isNaN(num2.value)) {
        notify.style.color = "#DD0000";
        textnotify.innerHTML = "Số không hợp lệ";
        return false;
    }
    textnotify.innerHTML = "";
    notify.style.color = "white";
    return true;
}

function CheckCalculation() {
    notify.style.color = "#DD0000";
    answer.value = "";

    if (num1.value == "" || num2.value == "") {
        textnotify.innerHTML = "Hãy điền vào ô trống";
        return false;
    }

    var calculation = "";
    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            calculation = checkbox[i].value;
            break;
        }
    }
    if (calculation == "") {
        textnotify.innerHTML = "Hãy chọn phép tính";
        return false;
    }
    if (num2.value == 0 && calculation == "divide") {
        textnotify.innerHTML = "Phép chia không hợp lệ";
        return false;
    }
    if (!CheckNum()) {
        return false;
    }

    return true;
}

function Reset() {
    num1.value = num2.value = answer.value = "";
    notify.style.color = "white";
    textnotify.innerHTML = "";
    for (i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
    }
}