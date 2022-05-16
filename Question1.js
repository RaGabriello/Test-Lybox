function Calc(arr,n1,n2)
{
    var result = 0;
    for(i=n1;i<n2;i++)
    {
        result = result + arr[i]
    }
    return result
}

var arr = [1,2,3,4,5,6,7,6,4,5,9]
result = Calc(arr,3,6)
console.log(result)