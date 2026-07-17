// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();

    const target=document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>80){
nav.style.background="rgba(0,0,0,.9)";
}else{
nav.style.background="rgba(0,0,0,.6)";
}

});

// Simple fade animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .8s";

observer.observe(card);

});

// Booking button
function bookNow(){

window.open(
"https://wa.me/918091704001?text=Hello%20Sangla%20On%20Wheels,%20I%20want%20to%20book%20a%20tour.",
"_blank"
);

}
