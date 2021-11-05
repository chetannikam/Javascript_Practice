/*In Operator and using Object*/

const a=[1,1,1,1,4,71,3,4,'a','a','a','a','a',4,5,6,7,7,7]
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
for(var character in count_array)/*For Each Loop*/
{
    console.log(character+':'+count_array[character])
}
console.log("----------------------------------------------------------------------")
console.log("Using Array")

var array=[1,1,1,1,4,71,3,4,'a','a','a','a','a',4,5,6,7,7,7]
var array_for_counting_charcter=[]
for(var i=0;i<256;i++)
{
array_for_counting_charcter[i]=0
}
for(var i=0;i<array.length;i++)
{
    if(array[i]>='a'&&array[i]<='z' || array[i]>='A'&&array[i]<='Z' )
    {
        let ascii_value=array[i].charCodeAt(0)
        array_for_counting_charcter[ascii_value]+=1
    }
    array_for_counting_charcter[array[i]]+=1
}

for(var i=0;i<array_for_counting_charcter.length;i++)
{
    flag=false
if(array_for_counting_charcter[i]!=0)
{
    let string_char=""
    if((i>=65&&i<=90)||(i>=97 && i<=122))
        {
            string_char=String.fromCharCode(i)
            for(var j=0;j<array.length;j++)
            {
                if (string_char==array[j])
                {
                    flag=true;
                    break;
                }
               
            }
       
         }
        if(flag==true)
        {
            console.log(`${string_char}:-${array_for_counting_charcter[i]}`)
        }
        else
        {
            console.log(`${i}:-${array_for_counting_charcter[i]}`)
        }
         
        
    
}
}
// console.log(count_array)