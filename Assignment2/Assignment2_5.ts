
function ChkString(Brr : string,Check : string) : boolean
{
    let Cnt : number = 0
    var split = Brr.split(" ")
    
    for(Cnt = 0 ; Cnt < split.length; Cnt++)
    {
        if(split[Cnt] == Check)
        {
            return true
        }
    }
    return false
}

var Arr : string = "Pune Kothrud Marvellous infosystem"
var Checker : string = "infosystem"
var iRet : boolean = false

iRet = ChkString(Arr,Checker)
if(iRet == true)
{
    console.log("String contains Marvellous in it.")
}
else
{
    console.log("String not contains Marvellous in it.")
}