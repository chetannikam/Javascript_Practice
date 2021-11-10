/*In Operator and using Object*/

function count_char(a=[])
{
    var count_array={}    
    for(var i=0;i<a.length;i++)
    {
        if(a[i] in count_array==false)
        {
            count_array[a[i]]=1
        }
        else
        {
         count_array[a[i]]+=1   
        }
    }
    return count_array
}
const a=[1,1,1,1,4,71,3,4,'a','a','a','a','a',4,5,6,7,7,7]
let array=count_char(a)

for(var character in array)/*For Each Loop*/
{
    console.log(character+':'+array[character])
}
