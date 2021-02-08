// solution of
// fibonacci series

function fibonacci(num){

    var fibo = [0, 1];

    for(i = 2; i <= num; i++){

        fibo[i] = fibo[i -1 ] + fibo[i - 2]; // here i = array position
    }
    return fibo;
}

var result = fibonacci(12);
console.log(result);