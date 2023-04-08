class Circle
{
    public Radius : number;
    public PI : number;

    public constructor(Data : number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }

    public Area() : number
    {
        let Ans: number = 0;
        Ans = this.PI *this.Radius*this.Radius;
        return Ans;
    }
}

var iRet: number = 0;
var Obj1 = new Circle(7.4);
var Obj2 = new Circle(5.6);

iRet = Obj1.Area();
console.log("Area of Obj1 is : "+iRet);

iRet = Obj2.Area();
console.log("Area of Obj2 is : "+iRet);

