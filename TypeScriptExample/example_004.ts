
function test (a: Array <number>) : number 
{

    console.log("a == ", a);

    let sum: number = 0;

    for(let i = 0; i < a.length ; i++)
    {
       //let --> local variable inside block scope
        sum += a[i];

        console.log(" + " + a[i] + " = " + sum);

        let name : String = "test";
        console.log(name);
    }
    return sum;
}

function varType()
{
    let numType : number;
    let strType : String;

    console.log(">>>>> Number >>>>>")
    numType = 6;
    console.log("numType === " +  numType);
    numType = Math.random() * 100;
    console.log("Random number === " +  numType);
    numType = 3.3;
    console.log("numType === " +  numType);
    numType = 3*3;
    console.log("3*3 === " +  numType);

    console.log(">>>>> String >>>>>");
    strType = "String is here";
    console.log("String = " + strType);
    strType = "This" + " & " + " that ";
    console.log("String = " + strType);
    strType = strType.slice(8,12);
    console.log("String  slice = " + strType);

    console.log(">>>>> boolean >>>>>");


    console.log(">>>>> Array >>>>>");

    console.log(">>>>> Enum >>>>>");

    console.log(">>>>> Void >>>>>");
}

