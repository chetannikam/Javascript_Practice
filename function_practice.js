function printArrayElements(array)
{
    for(var i=0;i<array.length;i++)
    {
        console.log(array[i])
    }
}
function sum_of_all_elements(array=[])
{
    sum=0
    for(var i=0;i<array.length;i++)
    {
        sum=sum+array[i]
    }
    return sum
}

const a=[1,2,3,4]
printArrayElements(a)
let result;
result=sum_of_all_elements(a)
console.log('Sum is:-',result)
// printArrayElements([44,5,6,6])