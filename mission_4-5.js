function atarikujishow(){
    var atarikuji=new Array('1等','2等','3等','4等','5等','参加賞');
    var number1=Math.random();
    var number2=number1*6
    var number=Math.floor(number2);
    var message=atarikuji[number];

    var object=document.getElementById("atarikuji");
    object.innerText=message;
}