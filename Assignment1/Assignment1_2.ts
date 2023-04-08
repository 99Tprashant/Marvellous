
function Area( Radius : number , PI : number = 3.14) : number
{
    var Circle : number = 0
    Circle = PI*Radius*Radius

    return Circle
}

var Radius : number = 5
var iRet : number = 0

iRet = Area(Radius)

console.log("Area of circle is "+iRet)
