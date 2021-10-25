let num = +prompt("Введите число");

let isPrime = true;

if ( (Number.isInteger(num)) && (num > 1) ){
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) {
            isPrime = false;
            break; 
      }
    } 
    console.log(isPrime);
}
