
function leapYear(year){

    if(year % 4 == 0){
        if(year.indexOf(2,3) == 0){
            if(year % 400 == 0){
                return true;
            }
            else{
                return false;
            }
            
        }
        return true;
    }
}
var result = leapYear(1700);
console.log(result);