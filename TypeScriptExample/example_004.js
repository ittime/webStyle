function test(a) {
    console.log("a == ", a);
    var sum = 0;
    for (var i = 1; i < a.length; i++) {
        //let --> local variable inside block scope
        sum += a[i];
        console.log(" + ", a[i], " = ", sum);
        var name_1 = "test";
        console.log(name_1);
    }
    return sum;
}
