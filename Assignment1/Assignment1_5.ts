
function Fibonacci(iNo : number) : void
{
    var a : number = 1
    var b : number = 1
    var c : number = 0
    var iCnt : number = 0
    for(iCnt = 1 ; iCnt <= iNo; iCnt++)
    {   
        if(iNo < a)
        {
            break
        }
        console.log(a)
        c = a + b
        a = b
        b = c

    }

}

var iValue : number = 21
Fibonacci(iValue)