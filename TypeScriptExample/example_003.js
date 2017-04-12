function test(a)
{
    var sum = 0;

    for (var i=1; i < a.length; i++)
    {
        sum += a[i];
    }

    return sum;
}