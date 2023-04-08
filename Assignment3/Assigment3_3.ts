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

class CircleX extends Circle
{
    public constructor(Data : number)
    {
        super(Data);
    }

    CalculateCircumferance() : number
    {
        let Ans : number = 0;
        Ans = 2* this.PI*this.Radius;
        return Ans;
    }
}

var iRet :number = 0;

var Obj1 = new CircleX(7.5);
iRet = Obj1.CalculateCircumferance();
console.log("Circumference of Obj1 is : "+iRet);

var Obj2 = new CircleX(5.5);
iRet = Obj2.CalculateCircumferance();
console.log("Circumference of Obj2 is : "+iRet);