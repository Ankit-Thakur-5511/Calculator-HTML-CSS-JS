let screen = document.querySelector('.screen'); // Use querySelector to get the single element
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
                screen.value = 'Error'; // Handle any errors
            }
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            screen.value = string;
        } else if (e.target.innerHTML === 'DEL') { // Fix the comparison string
            string = string.slice(0, -1); // Correctly remove the last character
            screen.value = string;
        } else {
            string += e.target.innerHTML;
            screen.value = string;
        }
    });
});
