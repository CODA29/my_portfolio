gsap.registerPlugin(Flip);
var burger = document.getElementById("burger");
var home = document.getElementById("home");
const activeNav = document.querySelector(".activeNav");
const links = document.querySelectorAll(".links");
const nav = document.getElementById("nav");
const logo = document.querySelector(".logo");
const clicked = document.querySelector(".clicked");
var i = document.createElement("i");


function myFunction() {
    
    var x = document.getElementById("nav");
    i.className = "fa-solid fa-house";
 
    if (x.className === "nav") {

      x.className += " clicked";
      burger.className = "fa-solid fa-xmark";
      home.innerHTML="";
      home.appendChild(i);
      //home.classList.remove('activeNav');
      x.style.background = "#3d3b3b8b";
      
    }else {

      x.className = "nav";
      burger.className = "fa-solid fa-bars-staggered";
      home.innerHTML="";
      home.innerHTML ="HOME";
      x.style.transition = "0.7s";
      x.style.backgroundColor = "white";
      
    }
    
    
}

document.onclick = function(e){
    if(e.target.className == 'links'|| e.target.className == 'logo' || e.target.className == 'fa-solid fa-house'){
        nav.classList.remove('clicked');
        burger.className = "fa-solid fa-bars-staggered";
        home.removeChild(i);
        home.innerHTML ="HOME";
        nav.style.transition = "0.7s";
        nav.style.backgroundColor = "white";

    }

}

// active page indicator with animation

links.forEach(link =>{
  link.addEventListener('click',()=>{

    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);

    Flip.from(state,{
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1,0.3)",
    })
  });
})

/*
// logo animation
const split = new SplitText(".logoContainer");
// gsap.to triggers animations
gsap.to(
  // The array of letters
  split.chars,
  // Animation duration in seconds
  0.7,
  {
    // Translate on X axis -40 pixels
    x: "-40",
    // Smooth out the stop/start with easeInOut
    ease: "power2.inOut",
    // Reverse the animation back to start
    yoyo: true,
    // Delay the next item in seconds
    stagger: 0.08,
    // Infinite repeat
    repeat: -1
  }
);
*/










