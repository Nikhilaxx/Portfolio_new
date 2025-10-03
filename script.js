(function(){
    emailjs.init("YQhf2B25h62GeEnw6"); 
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_5z2mnu7",     
    "template_12i786o",   
    this
  ).then(() => {
      alert("✅ Message Sent Successfully!");
      this.reset(); 
      alert("❌ Failed to Send: " + JSON.stringify(err));
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

