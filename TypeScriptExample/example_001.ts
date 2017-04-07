function test (a: array<number>) : number;
{
    let sum: number = 0;
    for (let i = 1; i < a.length; i++)
    {
        sum += a[i];
    }

    return sum;
}