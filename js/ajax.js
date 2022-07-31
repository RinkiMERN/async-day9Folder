// let ajx=new XMLHttpRequest();
// ajx.open("GET","https://api.github.com/users");

// //fetch data from server
// ajx.onload=function(){
//     if(this.status>=200 && this.status<300)
//     {
//         console.log(JSON.parse(this.response));
//     }
// };

// //catch error
// ajx.onerror=function(){
//     if(this.status>=400 && this.status<500)
//     {
//         console.log(JSON.parse(this.response));
//     }
// };

// //send
// ajx.send();

// let ajx=new XMLHttpRequest();
// ajx.open("GET","https://api.github.com/users");

// //fetch data from server
// ajx.onload=function(){
//     let value=(JSON.parse(this.response));
//     let output="";
//     [...value].forEach(user=>{
//         let {login, avatar_url,url,html_url}=user;
//         output +=`<div> <figure> 
//                         <img src=${avatar_url} alt=${login}/>
//                         </figure>
//                         <h2>${login}</h2>
//                         <a href=${html_url} target="">view more</a>
//                         </div>`
//     });
//     document.querySelector("#templates").innerHTML=output;
// };

// //catch error
// ajx.onerror=function(){
//     if(this.status>=400 && this.status<500)
//     {
//         console.log(JSON.parse(this.response));
//     }
// };

// //send
// ajx.send();

