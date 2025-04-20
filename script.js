let screen = document.querySelector('.screen'); 
let btn = document.querySelectorAll('button');

let string = '';
let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                screen.value = string;
            } catch {
                screen.value = 'Error'; 
            }
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            screen.value = string;
        } else if (e.target.innerHTML === 'DEL') { 
            string = string.slice(0, -1); 
            screen.value = string;
        } else {
            string += e.target.innerHTML;
            screen.value = string;
        }
    });
});
