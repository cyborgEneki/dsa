function fizzbuzz(n) {
    let currentNumber = 1;

    while (n > 0) {
        if (currentNumber % 5 === 0 && currentNumber % 3 === 0) {
            console.log('FizzBuzz');
        } else if (currentNumber % 5 === 0) {
            console.log('Buzz');
        } else if (currentNumber % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(currentNumber.toString())
        }
        n--;
        currentNumber++;
    }
}

fizzbuzz(15);