let score = prompt("your score : ")
if(score >= 80){
    document.getElementById("result").innerHTML = "your grade is A"

}else if (score >= 70){
    document.getElementById("result").innerHTML = "your grade is B"
    
}else if (score >= 60){
    document.getElementById("result").innerHTML = "your grade is C"
    
}else if (score >= 50){
    document.getElementById("result").innerHTML = "your grade is D"
    
}else if (score <= 50){
    document.getElementById("result").innerHTML = "your grade is F"
    
}