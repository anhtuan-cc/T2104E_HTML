function demo_1(){
    alert("Ban vua goi function demo 1");
}
function demo_2(){
    alert("Ban vua goi function demo 2");
}
function demo_3(){
console.log("function demo 3");
}
function demo_4(){
    alert("double Click");
}
function textInput(msg){
    var k = event.keyCode;
    if(k==13){
        console.log(msg+"..., Nhan phim enter");

    }
}
function textInput(e){
    var v = e.valuel;// tra ve gia tri nguoi dung dien vao input
    console.log(v);
}
function copy(){
    console.log("Copy");
}
function cut(){
    console.log("Cut");
}
function paste(){
    console.log("Paste");
}
function changeSelect(e){
    console.log("Change..."+ e.value);
}
function timerCountdown(e){
    var code = event.keyCode;
    if(code==13){
        var v = e.value;
        if(v>=1){
            var min=v;
            var sec=0;
            var timer = setInterval(function (){
                var min_txt= min>=10?min:"0"+min;//toan tu 3 ngoi
                //tuong duong voi
                if(sec>=10){
                    var sec_txt=sec;
                }else{
                    var sec_txt="0"+sec;
                }
                // console.log(min_txt+":"+sec_txt);
                var box_min = document.getElementById("box-min");
                box_min.innerText=min_txt;
                var box_sec = document.getElementById("box-sec");
                box_sec.innerText = sec_txt;
                sec--;
                if(sec<0){
                    min--;
                    sec=59;
                }
                if(min<0){
                    clearInterval(timer);
                }
            },100);
        }
    }
}

//can tao 1 button nhan vao de chon phan thuong ngau nhien trong cac phan thuong tren
//thoi gian quay la 10s( tu là khi nhấn vào nó sẽ đổi liên tục quà trong 10s,
//cái nào cuối cùng mới là phần quà chính thức
//Sau đó in ra thong báo trên 1 thẻ h2 (span...) món quà nhận đc

    var reward = [
        "oto",
        "sh",
        "dream",
        "chuot mt",
        "but bi",
        "xe dap",
    ];
function goodLuck(){
    var coutn = 50; //chay 50 lan dao qua
    var timer = setInterval(function (){
        //chon qua ngau nhien tu danh sach
        var i = Math.random()*100;//co 6 mon qua
        i = parseInt(i); // 1 so ngau nhien trong danh sach qua
        //in ra ket qua
        var kq=document.getElementById("ketqua");
        kq.innerText="Mon qua nhan duoc: "+reward[i];
        coutn--;
        if(coutn<=0){
            clearInterval(timer);
        }
    },50)
}
