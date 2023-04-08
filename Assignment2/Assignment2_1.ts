

function Maximum( Brr : number[]) : number
{
    let iCnt : number = 0
    var iMax : number = Brr[0]

    for(iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        if(Brr[iCnt] > iMax)
        {
            iMax = Brr[iCnt]
        }
    }
    return iMax
}

var Arr : number[] = [23 , 89, 6 , 29 , 56 , 45 , 77 , 32]
var iRet : number = 0

iRet = Maximum(Arr)

console.log("Maximum Number is : "+iRet)
