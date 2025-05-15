function addNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return reject(new Error('Both arguments must be numbers.'));
        }

        let sum = a + b;
        let count = 1;

        const intervalId = setInterval(() => {
            console.log(`Iteration ${count}: sum = ${sum}`);
            count++;

            if (count > 5) {
                clearInterval(intervalId);
                return resolve(sum);
            }

            sum += b;
        }, 2000);
    });
}

addNumbers(5, 3)
    .then(finalSum => {
        console.log(`Final sum after 5 iterations: ${finalSum}`);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

addNumbers(5, 'three')
    .then(finalSum => {
        console.log(`Final sum after 5 iterations: ${finalSum}`);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
