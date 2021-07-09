//Variables
const button_container = document.querySelector('#button_container');
const screen = document.querySelector('#screen');
const arithmetic = {
    equation : '',
    numbers : [],
};
let i = 0;
let x = 0;

//Create number buttons for the calculator dynamically 1-9
for (let i=1; i<10; i++){
    const number_buttons = document.createElement("button");
    let node = document.createTextNode (i);
    number_buttons.appendChild(node);
    button_container.appendChild(number_buttons);
    number_buttons.setAttribute('id','number');
    number_buttons.setAttribute("style", "font-size: 40px;");
    number_buttons.addEventListener("click", ()=> screen_function(i));
};

//Creates 0 button
const zero_button = document.createElement("button");
let node = document.createTextNode (0);
zero_button.appendChild(node);
button_container.appendChild(zero_button);
zero_button.setAttribute('id','number');
zero_button.setAttribute('class','zero_button');
zero_button.setAttribute("style", "font-size: 40px;");
zero_button.addEventListener("click", ()=> screen_function(0));

//Create decimal button
const decimal_button = document.createElement("button");
node = document.createTextNode ('.');
decimal_button.appendChild(node);
button_container.appendChild(decimal_button);
decimal_button.setAttribute('id','number');
decimal_button.setAttribute("style", "font-size: 50px;");
decimal_button.setAttribute('class','decimal_button');
    decimal_button.addEventListener("click", function (){
        if(arithmetic.numbers[0] !== undefined && x < 1){
            screen_function('.');
            x = 1;
        };
    });


//Clear Button
const clear_button = document.querySelector('#clear_button');
clear_button.addEventListener("click", function (){
    screen.innerHTML = '';
    arithmetic.numbers = [];
    arithmetic.equation = ''; 
    i = 0;
    x = 0;
});

//Delete Button
const delete_button = document.querySelector('#delete_button');
delete_button.addEventListener('click', function (){
    if(arithmetic.numbers[0] !== undefined){
    screen.innerHTML = '';
    screen_function(String(arithmetic.numbers[i]).slice(0,-1));
    };
});

//Adds content to the calculator screen and loads numbers array
function screen_function(a){
    if(arithmetic.numbers[i] === undefined){
        screen.appendChild(document.createTextNode(a));
        arithmetic.numbers[i] = (Number(screen.innerHTML)); 
    }else if(arithmetic.numbers[i].toString().length <= 9){
        arithmetic.numbers[i] = null;
        screen.appendChild(document.createTextNode(a));
        arithmetic.numbers[i] = (Number(screen.innerHTML));
    }else{
        screen.innerHTML = '';
        screen.appendChild(document.createTextNode(arithmetic.numbers[i]));
    };
};

window.addEventListener("click", a => {
    if(a.target.className === 'equation'){
        if (arithmetic.equation !== '' && arithmetic.numbers[1] !== undefined){
            screen.innerHTML = '';
            do_math(arithmetic.numbers[0],arithmetic.numbers[1],arithmetic.equation);
        };
           i = 1;
           x = 0;
           arithmetic.equation = a.target.innerText;
           screen.innerHTML = '';
    };
    if(a.target.id === 'equal_button' ){
        screen.innerHTML = '';
        if(!Object.is(arithmetic.numbers[0],NaN)){
            if(arithmetic.numbers[1] !== undefined){
                    do_math(arithmetic.numbers[0],arithmetic.numbers[1],arithmetic.equation);
            }else if(arithmetic.numbers[0] === undefined){
                screen_function("Error");
            }else{
                    do_math(arithmetic.numbers[0],arithmetic.numbers[0],arithmetic.equation);
            };
        }else{
            screen_function("Error");
        };
    };
});

//Function that does the math
function do_math(num1, num2, equation){
        if(equation === '+'){
            arithmetic.numbers = [num1 + num2];
        };
        if(equation === '-'){
            arithmetic.numbers = [num1 - num2];
        };
        if(equation === '/'){
            if(num2 === 0){
                arithmetic.numbers = ['Error'];
            }else{
                    arithmetic.numbers = [num1 / num2];
            };
        };
        if(equation === 'x'){            
            arithmetic.numbers = [num1 * num2]
        };
    
    i = 0;
    x = 0;

    //Checks if number is a float
    function checkIfFloat(value) {
      return Number(value) === value && value % 1 !== 0;
    };
    if(checkIfFloat(arithmetic.numbers[0])){
        arithmetic.numbers[0] = arithmetic.numbers[0].toFixed(3)
    };
    //Prevents screen out of bonds
    if(arithmetic.numbers[i].toString().length >= 9){
        arithmetic.numbers = ['Error'];
    };
    screen_function(arithmetic.numbers[0]);
};







