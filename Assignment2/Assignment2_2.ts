
function Summation(Brr : number[]) : number
{
    let iCnt : number = 0
    let iSum : number = 0

    for(iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        iSum = iSum + Brr[iCnt]
    }
    return iSum
}

var Arr : number[] = [23 , 6 , 7 , 4 , 5 , 7]
var iRet : number = 0

iRet = Summation(Arr)

console.log("Addition is "+iRet)