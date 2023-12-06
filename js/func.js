
"use strict"
function Task1() {
    let a = prompt("Введите первоначальный объём");
    let count = 0;
    while (a >= 10) {
        a -= a * 0.1;
        count++;
    }
    document.write("Достаточно воды в " + count + "<br>");
}


function b() {
    alert("Ошибка!");
}

function c(a) {
    alert("произошла ошибка " + a);
}

function Count1() {
    let x = 1;
    return () => x++;
}

let count = Count1();

function createHeaders(N) {
    for (let i = 1; i <= N; i++) {
        document.write("<h2>Заголовок" + count() + "</h2> ");
    }
}

function checkPass(password) {
    if (password === "One" || password === "Two" || password === "Three") {
        return true;
    } 
    else {
        return false;
    }
}

function signNum(a) {
    if (a > 0) {
        return 1;
    }
    else if (a === 0) {
        return 0;
    }
    else {
        return -1;
    }
}

function days(x) {
    if (x === 0) {
        return "Понедельник";
    }
    else if (x === 1) {
        return "Вторник";
    }
    else if (x === 2) {
        return "Среда";
    }
    else if (x === 3) {
        return "Четверг";
    }
    else if (x === 4) {
        return "Пятница";
    }
    else if (x === 5) {
        return "Суббота";
    }
    else if (x === 6) {
        return "Воскресенье";
    }
    else {
        return "Ошибка";
    }
}
