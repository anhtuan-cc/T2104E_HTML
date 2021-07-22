var tensinhvien = ["Nguyen Anh Tuan","Pham Nhu Quynh"];
var diemthi = [6,8];

var obj1 = { // khai bao 1 doi tuong
    name: "Nguyen Anh Tuan",
    age: 19,
    mark: 9,
    run: function (){
        console.log("Running....");
    }
}
// obj1 là 1 biến có giá trị là 1 đối tượng
console.log(obj1.name);//Lấy ra giá trị 1 thuộc tính của đối tượng
console.log(obj1.mark);//Lấy ra giá trị 1 thuộc tính mark
obj1.mark = 10;
console.log(obj1.mark);//lay ra gia tri `1 thuoc tinh cua doi tuong

function showInfo(ob){
    console.log(ob.name);
    console.log(ob.age);
    console.log(ob.mark);
}
showInfo(obj1);
obj1.run(); //thuc thi phuong thuc
//run();ko ton tai
var obj2= Object.create(obj1);
var obj3= Object.create(obj1);
var humans = [];
for (var 1=0;1<10;i++){

}
