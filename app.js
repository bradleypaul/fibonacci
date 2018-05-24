'use strict';
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        let resultButton = document.querySelector('#generate');
        let inputField = document.querySelector('#input');
        let result = document.querySelector('#result');
        resultButton.onclick = function () {
            result.value = fibonacci(inputField.value);
        };
    });

    let fibonacci = term => {
        if (term == 0) {
            return 0;
        } else if (term == 1) {
            return 1;
        } else {
            return fibonacci(term - 1) + fibonacci(term - 2);
        }
    }
})();
