let headone = document.querySelector("h1")
headone.addEventListener("click" , ()=>{
  headone.textContent = "My Name Is Mehren Munir"
  headone.style.color = "blue"
  headone.style.fontSize = "50px"
  headone.style.textAlign = "center"
})

  let intro = document.querySelector("h2");
 intro.style.color = "red";
 intro.style.fontSize = "40px";
 intro.style.textAlign = "center";
    
 
 let para = document.querySelector("p");
para.addEventListener("click",()=>{
     para.style.color = "green";
      para.style.backgroundColor = "pink";
      para.style.fontSize = "30px";
      para.style.textAlign = "center";
 });





let body = document.querySelector("body")
let darkbtn = document.querySelector(`.darkbtn`)
let lightbtn = document.querySelector(`.lightbtn`)
console.log(darkbtn)
darkbtn.addEventListener(`click`, function(){
 body.style.background = "black"
 body.style.color = "white"
})
lightbtn.addEventListener(`click`, function(){
 body.style.background = "white"
 body.style.color = "black"
})





document.addEventListener("dblclick", ()=>{
    document.body.style.backgroundColor = "yellow"
})
// document.addEventListener(Keydown, ()=>{
//     const para = document.querySelector(".event")
//      para.style.marginTop = `${e.y}px`
// })  