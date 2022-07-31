// setTimeout(()=>{
//     alert("hii");
// },10000)
// let x="x";
// let y="y";
// console.log(x);
// console.log(y);

// let count=1;
// let timer=window.setInterval(()=>{
//     console.log(count++);
//     if(count===10)
//     {
//         console.log("test");
//         window.clearInterval(timer);
//     }
//     document.write("😀");
// },1000);

// window.setInterval(()=>{
//     let date=new Date();
//     let hh=date.getHours();
//     let mm=date.getMinutes();
//     let ss=date.getSeconds();
//     document.getElementById("timer").innerHTML=`${hh}:${mm}:${ss}`;
//     if(hh>=12)
//     {
        
//     }
// })

let hour1=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let getClock=function(){
    let day=new Date();
    let hh=day.getHours();
    let mm=day.getMinutes();
    let ss=day.getSeconds();

    let hourDeg=hh * 30 + mm/2;
    let minuteDeg=mm * 6;
    let secondDeg=ss * 6;
    hour1.style.transform =`rotateZ(${hourDeg}deg)`;
    minutes.style.transform=`rotate(${minuteDeg}deg)`;
    seconds.style.transform=`rotate(${secondDeg}deg)`;

}
setInterval(getClock,1000);

// setInterval(()=>{
//     // let day=new Date();
//     // let hh=day.getHours();
//     // let mm=day.getMinutes();
//     // let ss=day.getSeconds();

//     // let hourDeg=hh * 30 + mm/2;
//     // let minuteDeg=mm * 6;
//     // let secondDeg=ss * 6;
//     // hour1.style.transform =`rotateZ(${hourDeg} deg)`;
//     // minutes.style.transform=`rotate(${minuteDeg} deg)`;
//     // seconds.style.transform=`rotate(${secondDeg} deg)`;
//     // console.log('hello');
// },1000)
