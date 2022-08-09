
document.body.style.backgroundColor='silver'
document.getElementById("title").style.color="green"
let headings=document.querySelectorAll("h3").forEach(heading=>heading.innerHTML=heading.textContent.toUpperCase())


var addedFruit=document.createElement("li")
var myfruit=document.createTextNode("Apple")
addedFruit.appendChild(myfruit)
var fruit=document.getElementById("fruList")
fruit.append(addedFruit)

var veges=document.createElement("li")
var myveges=document.createTextNode("Spinach")
veges.appendChild("myveges")
var mboga=document.getElementById("vegList")
mboga.append(veges)









