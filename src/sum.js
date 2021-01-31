let result

function sum(registerA, registerB, operator) {
    switch (operator) {
        case '+':
            result = registerA + registerB
            break
        case '-':
            result = registerA - registerB
            break
        case '*':
            result = registerA * registerB
            break
        case '/':
            result = registerA / registerB
            break
    }
    return result
}

export default sum