function soma(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = parseInt(num1) + parseInt(num2)
    document.getElementById("result").value = result
}

function subtracao(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = parseInt(num1) - parseInt(num2)
    document.getElementById("result").value = result
}

function multiplicacao(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = parseInt(num1) * parseInt(num2)
    document.getElementById("result").value = result
}

function divisao(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = parseInt(num1) / parseInt(num2)
    document.getElementById("result").value = result
}
