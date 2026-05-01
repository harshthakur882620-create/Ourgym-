// SCROLL BUTTON
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:"smooth"
  });
}

// SCROLL ANIMATION
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".hidden").forEach(el=>{
    let pos = el.getBoundingClientRect().top;
    if(pos < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});

// FORM
document.getElementById("form").addEventListener("submit",(e)=>{
  e.preventDefault();
  alert("Message Sent!");
});
