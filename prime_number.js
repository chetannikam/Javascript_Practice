var start=2;
var end=100;
while (start<=end)
{
var flag=false;
if(start===1)
{
    console.log(1,"is neighter prime nor composite number")
}
if (start===2)
    {
        flag=true;
    }
for(var i=2;i<start;i++)
{
    
     if(start%i===0)
    {
        flag=false;
        break;
    }
    else
    {
        flag=true;
    }

}
if (flag===true)
{
    console.log(start)
}
start+=1
}