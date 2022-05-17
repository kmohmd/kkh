
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    // add your code here
    let number=a+b+c;
    number = number + 90;//divide it by 10

    number=number/10;// add90



    // check if number is a multiply of 5
    if (number % 5 === 0){
        number =number-8;//subtract 8
    }
    else{
        number =number+9;//add9
    }

    number=number * number //sqaure number

    let G=number/3;//divide previous by3

    return roundup (G)

    //remember to call roundup 



    
    // remember to call roundUp() with your result before returning
    // return roundUp(g);
}