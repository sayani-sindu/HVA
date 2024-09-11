window.addEventListener("click", () =>{
    console.log("Window");
}, false);

document.addEventListener("click", () =>{
    console.log("Document");
}, false);

// document.querySelector('.div2').addEventListener("click",() =>{
//     console.log("Div 2");
// }, true);

// To stop prabagation

// document.querySelector('.div2').addEventListener("click",(e) =>{
//     e.stopPropagation();
//     console.log("Div 2");
// }, true);

// once property -- all others to false(use Captue)

document.querySelector('.div2').addEventListener("click",() =>{
    console.log("Div 2");
}, {once: true});

document.querySelector('.div1').addEventListener("click",()=>{
    console.log("Div 1");
}, false);

// when button choosen -- 'button' when changed to anchor tag change querySelector to '.button'
// document.querySelector('button').addEventListener("click",(e)=>{
//     console.log(e.target.innerText = 'clicked');
// }, false);

// As we can see that anchor tag is loading something but not doing the event-- we use preventDefault to sto its default property 

document.querySelector('.button').addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(e.target.innerText = 'clicked');
}, false);

// useCapture = true it is capturing phase(root to target)
// use Capture = false it is bubblibg phase(target to root)

