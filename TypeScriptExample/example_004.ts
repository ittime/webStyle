
function test (a: Array <number>) : number 
{

    console.log("a == ", a);

    let sum: number = 0;

    for(let i = 1; i < a.length ; i++)
    {
       //let --> local variable inside block scope
        sum += a[i];

        console.log(" + ", a[i] , " = ", sum);

        let name : String = "test";
        console.log(name);
    }
    return sum;
}
