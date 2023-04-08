
function ChkPrime(No : number) : boolean
{
    let iCnt : number = 0

    for(iCnt = 2; iCnt < No; iCnt++)
    {
        if(No % iCnt == 0)
        {
            return false
        }
        else
        {
            return true
        }
    }

}

var iNo : number = 6
var iRet : boolean = true
iRet = ChkPrime(iNo)
if(iRet == true)
{
    console.log("It is prime number")
}
else
{
    console.log("It is not prime number")
}


