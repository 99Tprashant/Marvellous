
function ChkArmstrong(No : number) : boolean
{
    var a : number = No
    var iCnt : number = 0
    var Sum : number = 0
    var Digit : number = 0
    Math.floor(Digit)
    while(a >= 1)
    {
        iCnt++
        a = a / 10
    }

    a = No
    while(a >= 1)
    {
        Digit = a % 10
        Math.floor(Digit)
        Sum = Sum + ( Math.floor(Digit)**iCnt)
        a = a / 10
    }

    if(No == Sum)
    {
        return true
    }
    else
    {
        return false
    }
}

var Value : number = 153
var iRet : boolean = false

iRet = ChkArmstrong(Value)
if(iRet == true)
{
    console.log("It is Armstrong number")
}
else
{
    console.log("It is not Armstrong number")
}




