function opertation (a, b, operator){
    if(operator === '+'){
        return a + b;
    }
    if(operator === '-'){
        return a - b;    
    }
    if(operator === '*'){
        return a * b;
    }
    if(operator === '/'){
        return a / b;
    }

};

//Create number buttons for the calculator dynamically 1-9
const button_container = document.querySelector('#button_container');
for (let i=1; i<10; i++){
const number_buttons = document.createElement("button");
let node = document.createTextNode (i);
number_buttons.appendChild(node);
button_container.appendChild(number_buttons);
number_buttons.addEventListener("click", ()=> screen(i));
};

//Creates 0 button
const zero_button = document.createElement("button");
let node = document.createTextNode (0);
zero_button.appendChild(node);
button_container.appendChild(zero_button);
zero_button.setAttribute('id','zero_button');

//Clear Button
const clear_button = document.querySelector('#clear_button');
clear_button.addEventListener("click", ()=> document.querySelector('#screen').innerHTML = '');

const add_button = document.querySelector('#add_button');

const subtract_button = document.querySelector('#subtract_button');
const multiply_button = document.querySelector('#multiply_button');
const divide_button = document.querySelector('#divide_button');


//Adds content to the calculator screen
function screen(a){
    const screen = document.querySelector('#screen');
    //screen.innerHTML = "";
    let content = document.createTextNode(a);
    screen.appendChild(content);
}

