const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","/","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let p1El = document.getElementById("p1")
let p2El = document.getElementById("p2")
let p3El = document.getElementById("p3")
let p4El = document.getElementById("p4")
let p5El = document.getElementById("p5")
let p6El = document.getElementById("p6")
function ff()
{
    let msg=""
    for(i=0;i<12;i+=1)
    {
        let num = Math.floor(Math.random()*characters.length)
        msg+=characters[num]
    }
    p1El.textContent= msg
    msg=""
    for(i=0;i<12;i+=1)
    {
        let num = Math.floor(Math.random()*characters.length)
        msg+=characters[num]
    }
    p2El.textContent= msg
    msg=""
    for(i=0;i<12;i+=1)
    {
        let num = Math.floor(Math.random()*characters.length)
        msg+=characters[num]
    }
    p3El.textContent= msg
    msg=""
    for(i=0;i<12;i+=1)
    {
        let num = Math.floor(Math.random()*characters.length)
        msg+=characters[num]
    }
    p4El.textContent= msg
    msg=""
    for(i=0;i<12;i+=1)
    {
        let num = Math.floor(Math.random()*characters.length)
        msg+=characters[num]
    }
    p5El.textContent= msg
    msg=""
    for(i=0;i<12;i+=1)
    {
        let num = Math.floor(Math.random()*characters.length)
        msg+=characters[num]
    }
    p6El.textContent= msg
   
}