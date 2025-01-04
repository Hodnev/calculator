let previous_value = '';
let previous_sign = '';
function isNumeric(num){
    return !isNaN(num)&&num!=''&&num!=' '
  }

function appendToDisplay(value) {
    current_value = document.getElementById('display').value;
    switch (value) {

        case '.':
            if (current_value.includes(value))
                return;
            if (current_value === '')
                document.getElementById('display').value = '0';
            break;

        case '+': case '-': case '*': case '/':
            if(!isNumeric(current_value))
                return;
            
            previous_value = current_value;
            previous_sign = value;
            calculateResult();
            return;

        case '0':
            if (current_value === '0')
                return;
            break;
        
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            if (current_value === '0' || !isNumeric(current_value))
                document.getElementById('display').value = '';
            break;
    }
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    console.log(document.getElementById('display').value);
    
    let display = previous_value + previous_sign + document.getElementById('display').value;
    console.log(display);
    if (isNumeric(display.value)) {
        
    }
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
    return;
}