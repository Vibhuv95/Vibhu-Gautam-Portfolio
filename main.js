var typed = new Typed(".text", {
    strings: ["Data Analyst", "Power BI Developer", "SQL Enthusiast", "Data Science Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* =================================
   -------EMAILJS CONNECTION--------
   ================================= */

emailjs.init({
    publicKey: "kpi7E0rxWKlNUjkxe",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector(".send-btn");

    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_xcacxie",
        "template_yiqodfk",
        this
    )

        .then(() => {

            alert("✅ Message Sent Successfully!");

            form.reset();

            button.innerHTML = "Send Message";
            button.disabled = false;

        })

        .catch((error) => {

            console.error("EmailJS Error:", error);

            alert(
                "Status: " + error.status +
                "\nText: " + error.text +
                "\nMessage: " + error.message
            );

            button.innerHTML = "Send Message";
            button.disabled = false;
        });

});


/*==================== ACTIVE NAVBAR ====================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        const top = section.offsetTop - 200;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

/*==================== FADE IN SECTIONS ====================*/

const fadeSections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
},{
    threshold:0.2
});
fadeSections.forEach(section=>observer.observe(section));

/*==================== MENU ICON ====================*/

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};