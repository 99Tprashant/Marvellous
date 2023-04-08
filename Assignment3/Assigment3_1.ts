
class Arithmetic
{
    public Number1 : number;
    public Number2 : number;

    public constructor(A : number,B : number)
    {
        this.Number1 = A;
        this.Number2 = B;
    }

    public Addition() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    }

    public Subtraction() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }

    public Division() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }

    public Multiplication() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }
}

var iRet :number = 0;
var AObj1 = new Arithmetic(21,11);
var AObj2 = new Arithmetic(51,31);

iRet = AObj1.Addition();
console.log("Addition of AObj1 is: "+iRet);

iRet = AObj1.Subtraction();
console.log("Subtraction of AObj1 is: "+iRet);

iRet = AObj1.Division();
console.log("Division of AObj1 is: "+iRet);

iRet = AObj1.Multiplication();
console.log("Multiplication of AObj1 is: "+iRet);

iRet = AObj2.Addition();
console.log("Addition of AObj2 is: "+iRet);

iRet = AObj2.Subtraction();
console.log("Subtraction of AObj2 is: "+iRet);

iRet = AObj2.Division();
console.log("Division of AObj2 is: "+iRet);

iRet = AObj2.Multiplication();
console.log("Multiplication of AObj2 is: "+iRet);

