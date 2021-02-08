// 5!
// 1*2*3*4*5
// or 5*4*3*2*1

function factorial(num){

    var value = 1;
    for(var i = 1; i<= num; i++){
        
        value = value * i;
        // console.log(i, value);
        
    }

     return value;
}

var result = factorial(10);
console.log(result);


