function clr()

{
document.getElementById("enter").value=" "

}
function equate()
{
    let x=document.getElementById("enter").value
    let y=eval(x);
    document.getElementById("enter").value=y

}
function display(val)
{
    document.getElementById("enter").value+=val 
    // enter is the id of input box
}