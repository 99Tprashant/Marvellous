function SecMaximum(Brr : number[]) : number
{
    let Cnt : number = 0
    var Max1 : number = Brr[0]
    var Max2 : number = Brr[0]
    var i : number = 0

    for(Cnt = 0; Cnt < Brr.length; Cnt++ )
    {
        if(Brr[Cnt] > Max1)
        {
            Max1 = Brr[Cnt]
            i = Cnt
        }
    }
    for(Cnt = 0; Cnt < Brr.length; Cnt++ )
    {
        if(Brr[Cnt] > Max2)
        {
            if(Cnt != i)
            {
                Max2 = Brr[Cnt]
            }
        }
    }


    return Max2
}

var Arr: number[] = [23 , 89 , 6 , 29 , 56 , 45 , 77 , 32]
var iRet : number = 0
iRet = SecMaximum(Arr)

console.log("Second Maximum number is "+iRet)