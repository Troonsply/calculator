var numbers = document.querySelectorAll('.number'),
    Operations = document.querySelectorAll('.operation'),
    DesimalBtn = document.getElementById('desimal'),
    ClearBtns = document.querySelectorAll('.clear_btn')
    ResultBtn = document.getElementById('result'),
    HowWorkBtn = document.getElementById('howWorkBtn'),
    Display = document.getElementById('display'),
    MemoryCurrentNumber =0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '',
    OperationList = document.getElementById('opertion_list');

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent); 
    })      
};

for (var i = 0; i < Operations.length; i++) {
    var operationBtn = Operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent); 
    })     
};

for (var i = 0; i < ClearBtns.length; i++) {
    var clearBtn = ClearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id); 
    })     
};

DesimalBtn.addEventListener('click', desimal);
ResultBtn.addEventListener('click', result); 
HowWorkBtn.addEventListener('click', howWork);
Display.addEventListener('click', function (e) {
    
});



function numberPress(number) {
    if (MemoryNewNumber) {
        Display.value = number;
        MemoryNewNumber = false;
    } else {
        if (Display.value === '0') {
            Display.value = number;
        } else { 
            Display.value += number;
        };
    };
};//нажатие кнопок клавиатуры


function operation(op) {
    var localOperationMemory = Display.value;
    if (MemoryNewNumber && MemoryCurrentNumber !== '=') {
        Display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
    };
    Display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;

    if (localOperationMemory == 0) {
        Display.value ='Error';
    }
};//операции типа сложения, вычитания и т.д.

function desimal() {
    var localDesimalMemory = Display.value;

    if (MemoryNewNumber) {
        localDesimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDesimalMemory.indexOf('.') === -1) {   
            localDesimalMemory += '.';
        };
    };
    Display.value = localDesimalMemory;
};//нажатие точки для десятичных

function clear(id) {
    if (id === 'ce') {
        Display.value = '0';
        MemoryNewNumber = true;
    } else if(id === 'c') {
        Display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber =0;
        MemoryPendingOperation = '';
    };
};//очистка экрана

function howWork() {
    for (var i = 0; i < Operations.length; i++) {
        var newLi = document.createElement('li');
        var operationText = Operations[i].value;
        newLi.innerText = operationText;
        OperationList.appendChild(newLi);
    };
};//на кнопку "как работает"
