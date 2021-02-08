
function fibonacci(num){

    if(num == 0){
        return [0];
    }
    else if(num == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacci(num - 1);
        var fiboElement = fibo[num - 1] + fibo[num - 2];
        fibo.push(fiboElement);
        return fibo;
    }
}

var result = fibonacci(12);
console.log(result);