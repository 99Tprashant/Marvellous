
function Maximum(No1 : number,No2 : number,No3 : number) : number
{
    if (No1 > No2)
    {
        if(No1 > No3 )
        {
            return No1
        }
        else
        {
            return No3
        }
    }
    else if (No2 > No3)
    {
        return No2
    }
    else
    {
        return No3
    }
}

var Value1 : number = 23
var Value2 : number = 89
var Value3 : number = 6
var iRet : number = 0

iRet = Maximum(Value1,Value2,Value3)

console.log("Maximum number is : "+iRet)