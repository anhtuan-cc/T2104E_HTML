var randomNumber = [];
while (randomNumber.length < 5){
    var n = parseInt(Math.random()*100);//so ngau nhien
    if(!randomNumber.includes(n)){
        randomNumber.push(n);
    }
}
// Chac chan duoc 5 so ngau nhien
var luckyNumber = [];
function inputNumber(){
    var input = document.getElementById("luckynumber");
    var n = parseInt(input.value);
    if (!luckyNumber.includes(n) && luckyNumber.length<5 && n>0 && n<=99){
        luckyNumber.push(n);
        alert("Ban da lua chon so:"+n);
    }
    //Kiem tra phan thuong
    if (luckyNumber.length == 5){
        var count = 0;//so luong cap so giong nhau
        for (var i=0;i<randomNumber.length;i++){
            if (luckyNumber.includes(randomNumber[i])){
                count++;
            }
        }
        switch (count){
            case 3:alert("chuc mung ban trung thuong 500.000");break;
            case 4:alert("Chuc mung ban trung 20.000.000");break;
            case 5:alert("Chuc mung ban trung 10B");break;
            default:alert("Chuc ban may mang lan sau");
        }
    }
}