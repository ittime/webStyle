function test(a) {
    console.log("a == ", a);
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        //let --> local variable inside block scope
        sum += a[i];
        console.log(" + " + a[i] + " = " + sum);
        var name_1 = "test";
        console.log(name_1);
    }
    return sum;
}
function varType() {
    var numType;
    var strType;
    console.log(">>>>> Number >>>>>");
    numType = 6;
    console.log("numType === " + numType);
    numType = Math.random() * 100;
    console.log("Random number === " + numType);
    numType = 3.3;
    console.log("numType === " + numType);
    numType = 3 * 3;
    console.log("3*3 === " + numType);
    console.log(">>>>> String >>>>>");
    strType = "String is here";
    console.log("String = " + strType);
    strType = "This" + " & " + " that ";
    console.log("String = " + strType);
    strType = strType.slice(8, 12);
    console.log("String  slice = " + strType);
    console.log(">>>>> boolean >>>>>");
    console.log(">>>>> Array >>>>>");
    console.log(">>>>> Enum >>>>>");
    console.log(">>>>> Void >>>>>");
}
