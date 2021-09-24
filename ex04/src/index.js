function sumFibonacci(num)
{
    if(num<=0)
    {
        return 0;
    }

    else if(num === 1)
    {
        return 1;
    }

    else
    {
        var fib = [];

        fib[0] = 0;
        fib[1] = 1;

        for(var i=2; i<=num; i++)
        {
            fib[i] = fib[i-2] + fib[i-1];
            var sum = fib[0];
            sum += fib[i]+fib[1];

            
        }
        return sum;
    }
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;