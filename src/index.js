import sum from './sum'

let registerA = ''
let registerB = ''
let inputRegisterB = false
let operator
let result
let lastAction

const display = document.getElementById('display')

document.getElementById('one').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '1'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '1'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('two').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '2'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '2'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('three').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '3'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '3'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('four').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '4'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '4'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('five').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '5'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '5'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('six').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '6'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '6'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('seven').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '7'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '7'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('eight').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '8'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '8'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('nine').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '9'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '9'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('zero').onclick = function() {
    if (inputRegisterB === false) {
        registerA = registerA + '0'
        display.innerText = registerA
    }
    else {
        registerB = registerB + '0'
        display.innerText = registerB
        lastAction = 'registerB'
    }
}

document.getElementById('plus').onclick = function() {
    if (registerB && lastAction != 'sum') {
        result = sum(parseInt(registerA), parseInt(registerB), operator)
        display.innerText = result
        registerA = result
    }
    operator = '+'
    registerB = ''
    inputRegisterB = true
}

document.getElementById('minus').onclick = function() {
    if (registerB && lastAction != 'sum') {
        result = sum(parseInt(registerA), parseInt(registerB), operator)
        display.innerText = result
        registerA = result
    }
    operator = '-'
    registerB = ''
    inputRegisterB = true
}

document.getElementById('multiply').onclick = function() {
    if (registerB) {
        result =  sum(parseInt(registerA), parseInt(registerB), operator)
        display.innerText = result
        registerA = result
        registerB = ''
    }
    operator = '*'
    inputRegisterB = true
}

document.getElementById('divide').onclick = function() {
    if (registerB && lastAction != 'sum') {
        result = sum(parseInt(registerA), parseInt(registerB), operator)
        display.innerText = result
        registerA = result
    }
    operator = '/'
    registerB = ''
    inputRegisterB = true
}

document.getElementById('sum').onclick = function() {
    result = sum(parseInt(registerA), parseInt(registerB), operator)
    display.innerText = result
    registerA = result
    lastAction = 'sum'
}

document.getElementById('reset').onclick = function() {
    registerA = ''
    registerB = ''
    inputRegisterB = false
    operator = undefined
    result = undefined
    lastAction = ''
    display.innerText = 0
}