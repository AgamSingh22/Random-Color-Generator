let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    // let randomcolor=getrandomcolor();
    h3.innerText=getrandomcolor();

    let box=document.querySelector(".box");
    box.style.background=getrandomcolor();
    console.log("color is upgraded");
});

function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}