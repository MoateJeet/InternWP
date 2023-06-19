let lotto_number =  prompt("สุ่มหวย!!!! : ")  
let random_number = Math.floor(Math.random() * 100)
document.getElementById("random").innerHTML = random_number

if(lotto_number == random_number){
    document.getElementById("result").innerHTML="เย้ๆๆๆๆๆ"
}
else{
    document.getElementById("result").innerHTML="SO SAD"
}