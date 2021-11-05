console.log("------------------------------Using Strings----------------------------------")
var s="*"
for(var i=1;i<=5;i++)
{
console.log(s)
s=s+"*"
}
console.log("------------------------Using Loops-------------------------------------------")

console.log("*****Forward pattern*********")
console.log("")
s=""
for(var i=1;i<=5;i++)
{
    for(var j=1;j<=i;j++)
    {
        s=s+"*"
    }
    console.log(s)
    s=""
}
console.log("")

console.log("*****Reverse pattern*********")
console.log("")

s=""
for(var i=6;i>=1;i--)
{
    for(var j=1;j<=i;j++)
    {
    s=s+"*"
    }
    console.log(s)
    s=""
} 
